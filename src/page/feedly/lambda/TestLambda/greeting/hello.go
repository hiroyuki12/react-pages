//パッケージ名はディレクトリと同じものにする必要があります。
package greeting
import(
  "fmt"
  "net/http"
  "log"
  "os"
  "encoding/json"
)
type MyResponse struct {
  Items []Item   `json:"items"`
}
type Stream struct {
  Items []Item `json:"items"`
}
type Item struct {
//    ID       string   `json:"id"`
    Title      string   `json:"title"`
    Alternates []Alternate `json:"alternate"`
    Engagement int      `json:"engagement"`
    Author     string   `json:"author"`
//let profileImageUrl = "https://cdn.profile-image.st-hatena.com/users/" + author + "/profile.gif"// items->thumbnail
//let myUrl: URL? = URL(string: "https://storage.googleapis.com/zenn-topics/swift.png?hl=ja")
    Published int     `json:"published"`
    OriginID string   `json:"originId"`
    Summary  Summary  `json:"summary"`
    Visual   Visual   `json:"visual"`
}
type Summary struct {
    Content string `json:"content"`
}
type Visual struct {
    URL string `json:"url"`
}
type Alternate struct {
    Href string `json:"href"`
}

//他のディレクトリ(パッケージ)から呼び出される関数は大文字から始まる必要があります。
//意外と間違えやすいポイントなので注意しましょう。
func SayHello(continuation string, category string) (MyResponse, error) {
  fmt.Println("Hello Golang!!")

  // category IT
  //res := CallFeedlyAPI("https://cloud.feedly.com/v3/streams/contents?streamId=user/41ba84d4-d1f7-4772-88fd-c6c03a024401/category/It&unreadOnly=true")

  // category hbfav
  //res := CallFeedlyAPI("https://cloud.feedly.com/v3/streams/contents?streamId=user/41ba84d4-d1f7-4772-88fd-c6c03a024401/category/c59b3cef-0fa1-414c-8aca-dc9678aaa85f&continuation=" + continuation + "&unreadOnly=true&count=100")
  res := CallFeedlyAPI("https://cloud.feedly.com/v3/streams/contents?streamId=user/41ba84d4-d1f7-4772-88fd-c6c03a024401/category/" + category + "&continuation=" + continuation + "&unreadOnly=true&count=100")

  // category zenn
  //res := CallFeedlyAPI("https://cloud.feedly.com/v3/streams/contents?streamId=user/41ba84d4-d1f7-4772-88fd-c6c03a024401/category/44e0c1a9-30b5-44ab-b7e5-2ba732503822&continuation=" + continuation + "&unreadOnly=true&count=100")

  var stream Stream
  json.NewDecoder(res.Body).Decode(&stream)

  var items []Item
  items = append(items, stream.Items...)

//  fmt.Println("stream start   =============================")
//  fmt.Println(stream)
//  fmt.Println("stream end   =============================")

//  fmt.Println(items[0].Title)
//  fmt.Println(items[0].Visual.URL)
//  fmt.Println(items[0].Alternates[0].Href)
//  fmt.Println(items[0].Author)

  fmt.Println("end")

  return MyResponse{Items: items}, nil
}

func CallFeedlyAPI(url string) *http.Response {

  req, err := http.NewRequest(
    http.MethodGet, url, nil)

  if err != nil {
    log.Fatal(err)
  }

  req.Header.Add(
    "Authorization",
    fmt.Sprintf("OAuth %s", os.Getenv("FEEDLY_TOKEN")))

    res, err := (&http.Client{}).Do(req)
    if err != nil {
        log.Fatal(err)
    }

    return res
}
