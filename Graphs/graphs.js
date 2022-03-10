const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");
code
const routes = [
    ["PHX", "LAX"],
    ["PHX", "JFK"],
    ["JFK", "OKH"],
    ["JFK", "HEL"],
    ["JFK", "LOS"],
    ["MEX", "LAX"],
    ["MEX", "BKK"],
    ["MEX", "LIM"],
    ["MEX", "EZE"],
    ["LIM", "BKK"]
];

const adjacencyList = new Map();

function addNode(airport) {
    adjacencyList.set(airport, []);
}

function addEdge(origin, destination) {
    adjacencyList.get(origin).push(destination);
    const dest = adjacencyList.get(destination);

    if (!dest) {
        addNode(destination)
    }
    adjacencyList.get(destination).push(origin);
}

airports.forEach(addNode);

routes.forEach(route => addEdge(...route));

console.log("result");
adjacencyList.forEach((value, key) => {
    console.log(key, value);
});
