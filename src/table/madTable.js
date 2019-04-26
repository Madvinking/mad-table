const template = document.createElement('template');
import { tableCss } from './madTableCss';
template.innerHTML = `
${tableCss}
<div id="container">
  <div id="title" class="padding15"></div>
  <div id="body" class="padding15">
    <div id="topPanelContainer">
      <div id="entries"></div>
      <div id="searchBar">
        <label>Search:
          <input type="search" placeholder="">
        </label>
      </div>
    </div>
    <table>
      <thead>
        <tr id="tableHeader"></tr>
      </thead>
      <tbody id="tableBody"></tbody>
    </table>
    <div id="bottomPanelContainer">
      <a>Previous</a>
      <span id="bottomNumbers"></span>
      <a>Next</a>
    </div>
  </div>
</div>
`;

export class madTable extends HTMLElement {

  constructor() {

    super();
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.appendChild(template.content.cloneNode(true));

    // class properties
    this.rows = 20;
    this.selected = [];
    this.columnsList = [];
    this.originalData = [];
    this.currentData = [];
    this.favorites = false;
    this.selectable = false;
    this.numberOfValues = 0;
    this.numberOfPages = 0;
    this.currentPage = 1;
    this.sortedBy = {currentSort: '', currentType: 0 };

    // bind all functions to the class
    this.click = this.click.bind(this);
    this._setTitle = this._setTitle.bind(this);
    this._createRow = this._createRow.bind(this);
    this._sortTable = this._sortTable.bind(this);

    // common elements used in the class
    this.tableBody = this.shadowRoot.getElementById('tableBody')
    this.tableHeader = this.shadowRoot.getElementById('tableHeader');
    this.tableHeader.addEventListener('click', this._sortTable);
  }

  // click handler when click on a row
  click(cb) {
    const _handleRowClick = event => {
      event.preventDefault();

      const row = event.path.find(x =>
        x.classList.contains('rowBody') || x.classList.contains('rowBodySelected'));

      row.classList.toggle('rowBody');
      row.classList.toggle('rowBodySelected');

      const index = row.getAttribute('index');

      if (row.classList.contains('rowBodySelected')) {
        this.selected.push(index);
      } else {
        this.selected = this.selected.filter(x => x !== index);
      }

      cb(this.originalData[index], row);
    }

    this.tableBody.addEventListener('click', _handleRowClick);

  }

  connectedCallback() {

    const arr = Array.from(this.children).filter(({tagName}) => tagName === 'MAD-TABLE-COL');

    this.favorites = this.hasAttribute('favorites');
    this.selectable = this.hasAttribute('selectable');

    const fragment = document.createDocumentFragment();

    if (this.hasAttribute('title')) {
      this._setTitle(this.getAttribute('title'));
    }

    if (this.hasAttribute('rows')) {
      this.rows = this.getAttribute('rows');
    }

    if (this.favorites) {
      const th = document.createElement('th');
      th.style.width = '5%';
      fragment.appendChild(th);
    }

    if (this.selectable) {
      const th = document.createElement('th');
      th.style.width = '5%';
      fragment.appendChild(th);
    }

    arr.forEach(elm => {
      const path = elm.getAttribute('path');
      const header = elm.getAttribute('header') || path;
      const width = elm.getAttribute('width') || 5;
      const sortable = elm.hasAttribute('sortable');

      const th = document.createElement('th');
      if (sortable) {
        //TODO add arrow next to col name
        th.addEventListener('click', this._sortTable);
      }
      th.style.width = `${width}%`;
      th.innerText = header;
      this.columnsList.push(path);
      fragment.appendChild(th);
    })

    this.tableHeader.appendChild(fragment);

  }

  _setTitle(value = null) {
    const title = value || this.getAttribute('title');
    if (!title) return;
    this.shadowRoot.getElementById('title').innerHTML = title;
  }

  _sortTable({ target:{ innerText: sortBy = null } = {} }) {
    const {currentSort, currentType } = this.sortedBy;
    let type = 0;

    if (!sortBy) {
      this.items = this.originalData;
      return;
    }

    if (sortBy === currentSort) {
      type = !currentType;
      this.sortedBy.currentType = type;
    }

    this.sortedBy.currentSort = sortBy;

    const compare = (a, b) => {
      let genreA = a[sortBy];
      let genreB = b[sortBy];
      if (typeof genreA === "string") {
        genreA = genreA.toUpperCase();
        genreB = genreB.toUpperCase();
      }
      let comparison = 0;

      if (type) {
        if (genreA < genreB)  comparison = 1;
        else if (genreA > genreB) comparison = -1;
        return comparison;

      } else {
        if (genreA > genreB) comparison = 1;
        else if (genreA < genreB)  comparison = -1;
        return comparison;

      }

    }

    const data = this.originalData.sort(compare);
    this.items = data;
  }

  _createRow(data, index) {
    const tr =  document.createElement('tr');
    tr.setAttribute('index', index);
    tr.className = 'rowBody';

    if (this.favorites) {
      const td = document.createElement('td');
      const i = document.createElement('i');
      td.appendChild(i);
      tr.appendChild(td);
    }

    if (this.selectable) {
      const td = document.createElement('td');
      const input = document.createElement('input');
      input.setAttribute('type', 'checkbox');
      td.appendChild(input);
      tr.appendChild(td);
    }


    this.columnsList.forEach((path) => {
      const td = document.createElement('td');
      td.innerHTML = data[path] || '';
      tr.appendChild(td);
    })

    return tr;
  }

  set items (values) {

    while (this.tableBody.firstChild) {
      this.tableBody.removeChild(this.tableBody.firstChild);
    }

    const slicedData = values.slice(0, this.rows);
    this.numberOfValues = values.length;
    this.numberOfPages = Math.ceil(values.length / this.rows);

    const entries = this.shadowRoot.getElementById('entries');
    entries.innerText = `Showing 1 to ${slicedData.length} of ${values.length} entries`;

    const bottomNumbers = this.shadowRoot.getElementById('bottomNumbers');
    const bottomFragment = document.createDocumentFragment();
    for ( let i = 1 ; i <= this.numberOfPages ; i++ ) {
      const aElm = document.createElement('a');
      aElm.setAttribute('index', i);
      aElm.innerText = i;
      bottomFragment.appendChild(aElm);
    }

    bottomNumbers.appendChild(bottomFragment);

    const fragment = document.createDocumentFragment();
    slicedData.map((value, index) => this._createRow(value, index))
          .forEach(tr => fragment.appendChild(tr));

    this.tableBody.appendChild(fragment);
    this.originalData = values;
  }

}

window.customElements.define('mad-table', Object.freeze(madTable));