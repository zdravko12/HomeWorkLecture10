

// 1.0
function postData() {
    let xhr = new XMLHttpRequest();

    let url = "https://jsonplaceholder.typicode.com/posts/";
    let method = "POST";
    let data = {
      title: "Zdravko",
      body: "zp",
      userId: 1
    };
    let json = JSON.stringify(data);

    xhr.open(method, url, true); 
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function () {
      if (xhr.status === 201) {
        console.log(xhr.response);
      } else {
        console.error(xhr.statusText);
      }
    };

    xhr.send(json);
  }

//   2.0

let url = "https://jsonplaceholder.typicode.com/posts/";
let limit = 10;

fetch(url)
  .then(response => response.json())
  .then(posts => {
    const postList = document.getElementById("post-list");
    for (let i = 0; i < limit && i < posts.length; i++) {
      let post = posts[i];
      let li = document.createElement("li");
      let title = document.createElement("h2");
      title.textContent = post.title;
      let body = document.createElement("p");
      body.textContent = post.body;
      li.appendChild(title);
      li.appendChild(body);
      postList.appendChild(li);
    }
  })
  .catch(error => console.error(error));

  // 3.0

  let url1 = "https://jsonplaceholder.typicode.com/posts/";

 
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onload = function () {
    if (xhr.status === 200) {
      let posts = JSON.parse(xhr.response);
      let lastTenPosts = posts.slice(-10);
      let postTableBody = document.getElementById("post");
      lastTenPosts.forEach(post => {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        td.textContent = post.id;
        tr.appendChild(td);
        postTableBody.appendChild(tr);
      });
    } else {
      console.error(xhr.statusText);
    }
  };
  xhr.send();