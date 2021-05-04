adjList = [
    [1,2],
    [3],
    [3,5],
    [4],
    [5],
    [3]
]

adjList2 = [
    [1],
    [2,3,6],
    [5],
    [4],
    [],
    [],
    []
]

// BFS uses a Queue -- First in First out
// DFS uses a Stack -- Last in First out

// Create a Breadth first Search that takes in an adjacency
// list and a start index and end index and traverses
// the graph from start to end
// The function should exit when it finds end or should return
// false if not path from start to end exists

//This is our helper function that will help with our Queue
function Queue() {
    this.arr = []
    this.enqueue = function(val) {
        this.arr.push(val)
    }
    this.dequeue = function(val) {
        return this.arr.shift()
    }
    this.length = function() {
        return this.arr.length
    }
}
//This is the beginning of out Breadth First Search
function BFS(adjList, start, end) {
    // Initializing our Queue
    var visitNext = new Queue()
    //Begin wth inserting our starting node to the queue
    visitNext.enqueue(start)
    // Keep track of what we have visited
    var visited = []
    // Create a variable that will hold our current node index
    var current;

    //This while loop will continue until the visitNext array length reaches 0
    while(visitNext.length() != 0) { 
        // First set current to the next value in visitNext
        current = visitNext.dequeue()
        // Set visited at current index to be true so that we don't 
        // double count or get into an infinite loop
        visited[current] = true

        // Check if our current node has reached the end node
        if(current == end) {
            return true
        }

        // Loop through all edges of our current node
        for(var i = 0; i < adjList[current].length; i++) {
            // If this check passes then add the edge to the queue to visit in the future
            if(visited[adjList[current][i]] != true) {
                visitNext.enqueue(adjList[current][i])
            }  
        }
    }
    //Return false if we exit the loop
    return false;
}

//This is the beginning of our Depth First Search
function DFS(adjList, start, end) {
    //Initializing our visitNext array with the starting node
    var visitNext = [start]
    // Keep track of what we have visited
    var visited = []
    // Variable that will hold our current node index
    var current;
    
    //This while loop will continue to run until our visitNext reaches 0
    while(visitNext.length != 0) { 
        // First set current to the next value in visitNext
        current = visitNext[0]
      
        // Next remove that value from visitNext
        visitNext.shift();
        // Set visited at current index to be true so that we don't 
        // double count or get into an infinite loop
        visited[current] = true
        
        // Check if current is the end
        if(current == end) {
            return true
        }  

        // Loop through all edges of our current node
        for(var i = 0; i < adjList[current].length; i++) {
           // If this check passes then add the edge to the queue to visit in the future
            if(visited[adjList[current][i]] != true) {
                visitNext.unshift(adjList[current][i])
            }  
        }
       
    }
    return false;
}

console.log(BFS(adjList2, 0, 6)) 
// return true
console.log(DFS(adjList, 0, 4))