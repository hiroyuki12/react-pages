package main
import(
  "encoding/json"
  "github.com/aws/aws-lambda-go/events"
  "github.com/aws/aws-lambda-go/lambda"
  "TestLambda/greeting"
)

func excuteFunction(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error){
  //res, err := greeting.SayHello("1629117655000")
  res, err := greeting.SayHello("9999999999999")
  if err != nil {
    return events.APIGatewayProxyResponse{
      Body:       err.Error(),
      StatusCode: 500,
    }, err
  }

  jsonResult, _ := json.Marshal(res)

  headers := map[string]string{
    "Content-Type":                    "application/json",
    "Access-Control-Allow-Origin":     request.Headers["origin"], // こっちは小文字!
    "Access-Control-Allow-Methods":    "OPTIONS,POST,GET",
    "Access-Control-Allow-Headers":    "Origin,Authorization,Accept,X-Requested-With",
    "Access-Control-Allow-Credential": "true",
  }

  return events.APIGatewayProxyResponse{
    Body:       string(jsonResult),
    StatusCode: 200,
    Headers:    headers,
  }, nil
}

func main(){
  lambda.Start(excuteFunction)
}
