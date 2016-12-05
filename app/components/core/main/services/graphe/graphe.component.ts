import {Component} from "@angular/core";

import {Bulle} from './bulle';

@Component({
    moduleId: module.id,
    selector: 'graphe',
    templateUrl: 'graphe.component.html',
    styleUrls: ['graphe.component.css']
})

export class GrapheComponent {

  constructor() {

  }

ngOnInit(): void {

// data on JSON 
  let bulles = [
    new Bulle('n0',"test0",1,['n2','n3']),
    new Bulle('n1',"test1",1,['n3','n4']),
    new Bulle('n2',"test2",0.5,['n0','n4']),
    new Bulle('n3',"test3",0.2,['n0','n1']),
    new Bulle('n4',"test3",0.7,['n1','n2'])
  ];

  function addEdges(g,bulle) {
    for(let edge of bulle.edges){
      g.edges.push({
      id: 'e' + bulle.id + edge,
      source: bulle.id,
      target: edge,
      size: 0.2,
      color: '#ccc'
      })
    }
}
    var i,
        s,
        N = 100,
        E = 500,
        g = {
          nodes: [],
          edges: []
        };
        for (let bulle of bulles) {
         console.log(bulle);
          }

for (let bulle of bulles) {
    g.nodes.push({
    id: bulle.id,
    label: bulle.name,
    x: Math.random(),
    y: Math.random(),
    size: bulle.size,
    color: '#4169E1'
    }),

    
addEdges(g,bulle);

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

    dragListener.bind('startdrag', function(event) {
      console.log(event);
    });
    dragListener.bind('drag', function(event) {
      console.log(event);
    });
    dragListener.bind('drop', function(event) {
      console.log(event);
    });
    dragListener.bind('dragend', function(event) {
      console.log(event);
    });
  }

}