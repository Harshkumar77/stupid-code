Math.random = () => crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32;

function copyToClipboard(elementId) {
  const text = document.getElementById(elementId).innerText;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      // alert(`Copied: ${text}`);
    })
    .catch((err) => console.error("Failed to copy text: ", err));
}

function openInNewTab(elementId) {
  const url = document.getElementById(elementId).innerText;
  window.open(url, "_blank").focus();
}

class URLStack {
  constructor() {
    this.urlKey = window.location.href;
    this.stack = JSON.parse(localStorage.getItem(this.urlKey)) || [];
  }

  // Push an item to the stack but dont update localstore
  softPush(item) {
    this.stack.push(item);
  }

  // Push an item to the stack
  push(item) {
    this.stack.push(item);
    this.save();
  }

  // Pop an item from the stack
  pop() {
    if (this.stack.length === 0) {
      console.warn("Stack is empty!");
      return null;
    }
    const popped = this.stack.pop();
    this.save();
    return popped;
  }

  empty() {
    return this.stack.length === 0;
  }

  // View the current stack
  display() {
    console.log("Current Stack:", this.stack);
  }

  // Save the stack to localStorage
  save() {
    localStorage.setItem(this.urlKey, JSON.stringify(this.stack));
  }
}

// [[1,2], [1,3] ......] 
function populatedEpisodes(SEASONS, EPISODES) {
  return Array(SEASONS)
    .fill(0)
    .map((_, i) => i + 1)
    .map((s) =>
      Array(EPISODES)
        .fill(0)
        .map((_, i) => [s, i + 1])
    )
    .flat();
}

Array.prototype.shuffle = function () {
  return this.sort(() => 0.5 - Math.random());
};

function redirect(url, season, episode) {
  document.getElementById("msg").innerText = url;
  window.location.href = url;
}

function listUrl(url) {
  document.getElementById("msg").innerHTML += `<a target="_blank" href="${url}">${url}</a>`;
}

const websiteA = ""