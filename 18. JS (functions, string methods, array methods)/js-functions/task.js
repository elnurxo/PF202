const websites = [
  "http://example.com",
  "https://google.com",
  "http://news.az",
  "https://github.io",
  "http://mywebsite.net",
  "https://business.org",
  "http://random.co.uk",
  "https://tech.edu",
  "http://shop.store",
  "https://portal.gov",
];

const search = window.prompt("search for website"); //string

searchWebsite(websites, search);

function searchWebsite(arr, query) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].endsWith(query)) {
      console.log(arr[i]);
    }
  }
}
