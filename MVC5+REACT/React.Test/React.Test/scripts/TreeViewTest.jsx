﻿    var dataSource = [{ "id": 1, "text": "Asia", "population": null, "flagUrl": null, "checked": false, "hasChildren": false, "children": [{ "id": 2, "text": "China", "population": 1373541278, "flagUrl": "http://code.gijgo.com/flags/24/China.png", "checked": false, "hasChildren": false, "children": [] }, { "id": 3, "text": "Japan", "population": 126730000, "flagUrl": "http://code.gijgo.com/flags/24/Japan.png", "checked": false, "hasChildren": false, "children": [] }, { "id": 4, "text": "Mongolia", "population": 3081677, "flagUrl": "http://code.gijgo.com/flags/24/Mongolia.png", "checked": false, "hasChildren": false, "children": [] }] }, { "id": 5, "text": "North America", "population": null, "flagUrl": null, "checked": false, "hasChildren": false, "children": [{ "id": 6, "text": "USA", "population": 325145963, "flagUrl": "http://code.gijgo.com/flags/24/United%20States%20of%20America(USA).png", "checked": false, "hasChildren": false, "children": [{ "id": 7, "text": "California", "population": 39144818, "flagUrl": null, "checked": false, "hasChildren": false, "children": [] }, { "id": 8, "text": "Florida", "population": 20271272, "flagUrl": null, "checked": false, "hasChildren": false, "children": [] }] }, { "id": 9, "text": "Canada", "population": 35151728, "flagUrl": "http://code.gijgo.com/flags/24/canada.png", "checked": false, "hasChildren": false, "children": [] }, { "id": 10, "text": "Mexico", "population": 119530753, "flagUrl": "http://code.gijgo.com/flags/24/mexico.png", "checked": false, "hasChildren": false, "children": [] }] }, { "id": 11, "text": "South America", "population": null, "flagUrl": null, "checked": false, "hasChildren": false, "children": [{ "id": 12, "text": "Brazil", "population": 207350000, "flagUrl": "http://code.gijgo.com/flags/24/brazil.png", "checked": false, "hasChildren": false, "children": [] }, { "id": 13, "text": "Argentina", "population": 43417000, "flagUrl": "http://code.gijgo.com/flags/24/argentina.png", "checked": false, "hasChildren": false, "children": [] }, { "id": 14, "text": "Colombia", "population": 49819638, "flagUrl": "http://code.gijgo.com/flags/24/colombia.png", "checked": false, "hasChildren": false, "children": [] }] }, { "id": 15, "text": "Europe", "population": null, "flagUrl": null, "checked": false, "hasChildren": false, "children": [{ "id": 16, "text": "England", "population": 54786300, "flagUrl": "http://code.gijgo.com/flags/24/england.png", "checked": false, "hasChildren": false, "children": [] }, { "id": 17, "text": "Germany", "population": 82175700, "flagUrl": "http://code.gijgo.com/flags/24/germany.png", "checked": false, "hasChildren": false, "children": [] }, { "id": 18, "text": "Bulgaria", "population": 7101859, "flagUrl": "http://code.gijgo.com/flags/24/bulgaria.png", "checked": false, "hasChildren": false, "children": [] }, { "id": 19, "text": "Poland", "population": 38454576, "flagUrl": "http://code.gijgo.com/flags/24/poland.png", "checked": false, "hasChildren": false, "children": [] }] }];
     
    var TreeView = React.createClass({
        getInitialState: function () {
            return {  };
        },

        handleClick: function (event) {
            //handle click event
            var checkedNodes = this.state.tree.getCheckedNodes();
            alert(JSON.stringify(checkedNodes));
        },

        checkboxChangeHandler: function (e, $node, record, state) {

        },

        componentDidMount: function () {
            this.state.tree = $('#treeDiv').tree({
                primaryKey: 'id',
                uiLibrary: 'bootstrap',
                dataSource: dataSource,
                //dataSource: this.props.sourceUrl,
                imageUrlField: 'flagUrl',
                checkboxes: true })
                .on('checkboxChange', this.checkboxChangeHandler)
        },

        render: function () {
            return (
                    <div>                      
                        <div id="treeDiv" ref="treeDivRef" />
                        <button className="btn btn-default" onClick={this.handleClick}>Save Checked Nodes</button>
                        
                    </div>
                   );
        }
});


ReactDOM.render(
    <TreeView sourceUrl = "/React.Test/location/get" />,
    //<TreeView sourceUrl="/React.Test/location/get"/>,//Get data from server
    document.getElementById('content')
);

