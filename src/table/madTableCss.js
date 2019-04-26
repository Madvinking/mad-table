export const tableCss = `<style>

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.margin15 {
  margin-right: -15px;
  margin-left: -15px;
}
.padding15 {
  padding-right: 15px;
  padding-left: 15px;
  position: relative;
  min-height: 1px;
}

div {
  display: block;
}

#container {
  color: #333;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 20px;

  float: left;
  transition-delay:0s;
  transition-duration:0.2s;
  transition-property:all;
  -webkit-tap-highlight-color:transparent;
  transition-timing-function:cubic-bezier(0.6, -0.28, 0.735, 0.045);

  border-radius: 4px;
  border-color:#dddddd;
  border-width: 1px;
  border-style:solid;
  margin-bottom:20px;
  overflow:hidden;
}

#title {
  background-color:#f5f5f5;
  border-color:#dddddd;
  border-bottom-style:solid;
  border-bottom-width:1px;
  font-weight:700;
  padding-bottom:10px;
  padding-top:10px;
  }

#body {
  overflow-x:auto;
  clear:both;
  max-height:1220px;
  width:1337px;
  padding: 15px 25px;
  position:relative;
}

#topPanelContainer {
  height:29px;
  margin:0px;
}

#entries {
  float: left;
}
#searchBar {
  float: right;
}


table, thead, tbody, th, tr, td {
  border-bottom-color:#dddddd;
  border-top-color:#dddddd;
  border-left-color:grey;
  border-right-color:grey;
  border-collapse:separate;
  -webkit-border-horizontal-spacing:0px;
  -webkit-border-vertical-spacing:0px;;
}

table {
  background-color:transparent;
  border-bottom-style:solid;
  border-bottom-width:1px;
  border-top-style:solid;
  border-top-width:1px;
  display:table;
  margin: 0px 6px;
  max-width:none;

}

thead {
  display:table-header-group;
  height:37px;
  text-size-adjust:100%;
  vertical-align:middle;
  width:1337px;
}

tr  #tableHeader {
  display:table-row;
  vertical-align:middle;
  width:1337px;
}

th {
  background-attachment:scroll;
  background-clip:border-box;
  background-color:transparent;
  background-image:none;
  background-origin:padding-box;
  background-position-x:0px;
  background-position-y:0px;
  background-size:auto;
  border-bottom-style:solid;
  border-bottom-width:1px;
  border-top-style:none;
  border-top-width:0px;
  box-sizing:content-box;
  cursor:pointer;
  display:table-cell;
  font-weight:700;
  height:20px;
  padding-bottom:8px;
  padding-left:8px;
  padding-right:30px;
  padding-top:8px;
  position:relative;
  text-align:left;
  vertical-align:bottom;
}

tr .rowBody, tr .rowBodySelected {
  display:table-row;
  height:55px;
  vertical-align:middle;
  max-width:1337px;
}

.rowBody:hover {
  background-color: #f5f5f5;
}

.rowBodySelected {
  background-color: #08C;
}

.rowBodySelected:hover {
  background-color:#0075b0;
}


td {
  border-top-style:solid;
  border-top-width:1px;
  box-sizing:content-box;
  display:table-cell;
  height: 34px;
  padding-bottom:10px;
  padding-left:18px;
  padding-right:18px;
  padding-top:10px;
  text-size-adjust:100%;
  vertical-align:top;
  width:367px;
}

i {
  border-collapse:separate;
  color:rgb(245, 140, 2);
  cursor:pointer;
  display:inline-block;
  font-stretch:100%;
  font-style:normal;
  font-variant-caps:normal;
  font-variant-east-asian:normal;
  font-variant-ligatures:normal;
  font-variant-numeric:normal;
  font-weight:400;
  height:14px;
  text-rendering:auto;
  text-size-adjust:100%;
  width:13px;
  -webkit-border-horizontal-spacing:0px;
  -webkit-border-vertical-spacing:0px;
  -webkit-font-smoothing:antialiased;

}

input[type="checkbox"] {
  background-color:transparent;
  border-color:#fff;
  border-style:none;
  border-width:0px;
  border-collapse:separate;
  border-image-outset:0px;
  border-image-repeat:stretch;
  border-image-slice:100%;
  border-image-source:none;
  border-image-width:1;
  color:#fff;
  cursor:default;
  display:inline-block;
  font-stretch:100%;
  font-style:normal;
  font-variant-caps:normal;
  font-variant-east-asian:normal;
  font-variant-ligatures:normal;
  font-variant-numeric:normal;
  font-weight:400;
  height:12px;
  letter-spacing:normal;
  line-height:normal;
  margin-bottom:0px;
  margin-left:0px;
  margin-right:0px;
  margin-top:4px;
  padding:0px;
  text-align:start;
  text-indent:0px;
  text-rendering:auto;
  text-shadow:none;
  text-size-adjust:100%;
  text-transform:none;
  width:12px;
  word-spacing:0px;
  writing-mode:horizontal-tb;
  -webkit-appearance:checkbox;
  -webkit-border-horizontal-spacing:0px;
  -webkit-border-vertical-spacing:0px;
  -webkit-rtl-ordering:logical;
  -webkit-border-image:none;

}

</style>
`