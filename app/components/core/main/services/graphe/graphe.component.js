"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var bulle_1 = require('./bulle');
var GrapheComponent = (function () {
    function GrapheComponent() {
    }
    GrapheComponent.prototype.ngOnInit = function () {
        // data on JSON 
        var bulles = [
            new bulle_1.Bulle('n0', "test0", 1, ['n2', 'n3']),
            new bulle_1.Bulle('n1', "test1", 1, ['n3', 'n4']),
            new bulle_1.Bulle('n2', "test2", 0.5, ['n0', 'n4']),
            new bulle_1.Bulle('n3', "test3", 0.2, ['n0', 'n1']),
            new bulle_1.Bulle('n4', "test3", 0.7, ['n1', 'n2'])
        ];
        function addEdges(g, bulle) {
            for (var _i = 0, _a = bulle.edges; _i < _a.length; _i++) {
                var edge = _a[_i];
                g.edges.push({
                    id: 'e' + bulle.id + edge,
                    source: bulle.id,
                    target: edge,
                    size: 0.2,
                    color: '#ccc'
                });
            }
        }
        var i, s, N = 100, E = 500, g = {
            nodes: [],
            edges: []
        };
        for (var _i = 0, bulles_1 = bulles; _i < bulles_1.length; _i++) {
            var bulle = bulles_1[_i];
            console.log(bulle);
        }
        for (var _a = 0, bulles_2 = bulles; _a < bulles_2.length; _a++) {
            var bulle = bulles_2[_a];
            g.nodes.push({
                id: bulle.id,
                label: bulle.name,
                x: Math.random(),
                y: Math.random(),
                size: bulle.size,
                color: '#4169E1'
            }),
                addEdges(g, bulle);
        }
        // Generate a random graph:
        //for (i = 0; i < N; i++)
        //  g.nodes.push({
        //    id: 'n' + i,
        //    label: 'Node ' + i,
        //   x: Math.random(),
        //   y: Math.random(),
        //   size: i/N + 0.1,
        //   color: '#666'
        // });
        //g.edges.push({
        //    id: 'e' + 3,
        //    source: 'n1',
        //  target: 'n3',
        //    size: 1,
        //   color: '#ccc'
        //  });
        // sigma.renderers.def = sigma.renderers.canvas
        // Instantiate sigma:
        s = new sigma({
            graph: g,
            container: 'graph-container',
            settings: {
                minNodeSize: 10,
                maxNodeSize: 40,
                minEdgeSize: 5,
                maxEdgeSize: 10
            }
        });
        // Initialize the dragNodes plugin:
        var dragListener = sigma.plugins.dragNodes(s, s.renderers[0]);
        dragListener.bind('startdrag', function (event) {
            console.log(event);
        });
        dragListener.bind('drag', function (event) {
            console.log(event);
        });
        dragListener.bind('drop', function (event) {
            console.log(event);
        });
        dragListener.bind('dragend', function (event) {
            console.log(event);
        });
    };
    GrapheComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'graphe',
            templateUrl: 'graphe.component.html',
            styleUrls: ['graphe.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], GrapheComponent);
    return GrapheComponent;
}());
exports.GrapheComponent = GrapheComponent;
//# sourceMappingURL=graphe.component.js.map