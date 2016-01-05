///////////////////////////////////////////////////////////////////////////
// Copyright © 2014 Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////

define(['dojo/_base/declare',
        'dojo/_base/html',
        'dojo/_base/lang',
        'dojo/query',
        'dijit/_WidgetsInTemplateMixin',
        "esri/layers/ArcGISDynamicMapServiceLayer",
        "esri/dijit/LayerList",
        'jimu/BaseWidget'
    ],
    function (declare,
              html,
              lang,
              query,
              _WidgetsInTemplateMixin,
              ArcGISDynamicMapServiceLayer,
              LayerList,
              BaseWidget) {
        var clazz = declare([BaseWidget, _WidgetsInTemplateMixin], {
            baseClass: 'jimu-widget-about',
            // clasName: 'esri.widgets.About',

            _hasContent: null,

            postCreate: function () {
                this.inherited(arguments);

                this._hasContent = this.config.about && this.config.about.aboutContent;
            },

            startup: function () {
                this.inherited(arguments);

                this.resize();

                this.addLayer();
            },
            addLayer: function () {
                //var layer = new ArcGISDynamicMapServiceLayer("http://www.rtongcloud.com:6080/arcgis/rest/services/other/bdc/MapServer");
                ////var layer = new ArcGISDynamicMapServiceLayer("http://192.168.228.243:6080/arcgis/rest/services/other/bdc/MapServer");
                //layer.isOperationalLayer = true;
                //
                //layer.on("load", lang.hitch(this, function () {
                //}));
                //this.map.addLayer(layer);
                var layerList = new LayerList({
                  map: this.map,
                  showLegend: true,
                  showSubLayers: true,
                  showOpacitySlider: true,
                  layers: []
                },this.layerListDom);
                layerList.startup();

                //setTimeout(lang.hitch(this,function(){
                //  var layerDefinitions = [];
                //  layerDefinitions[0] = "FID = 6";
                //  layerDefinitions[1] = "FID > 14";//CNNMCD怀河
                //  layerDefinitions[3] = "FID = 2";
                //  layer.setLayerDefinitions(layerDefinitions);
                //}),5*1000);


            },

            resize: function () {

            }
        });
        return clazz;
    });