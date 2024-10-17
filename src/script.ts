type MethodTyping = { url: string; method: "GET" | "POST" };

function makeRequest(req: MethodTyping) {
  console.log(req.url);
  console.log(req.method);
}

// let url = "https://google.com";
// let method: MethodTyping = "GET";

let req: MethodTyping = {
  url: "https://google.com",
  method: "GET",
};

makeRequest(req);
