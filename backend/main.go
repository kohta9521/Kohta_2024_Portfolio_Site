package main

import (
	"fmt"
	"time"

	"github.com/microcmsio/microcms-go-sdk"
)

type Content struct {
    Id string `json:"id,omitempty"`
    Text string `json:"text,omitempty`
    CreatedAt   time.Time `json:"createdAt,omitempty"`
    UpdatedAt   time.Time `json:"updatedAt,omitempty"`
    PublishedAt time.Time `json:"publishedAt,omitempty"`
    RevisedAt   time.Time `json:"revisedAt,omitempty"`
}

func main() {
    serviceDomain := "https://kohta-tech-blog.microcms.io/api/v1/"
    apiKey := "9PPFFChzSeXmqeBoR0anzjWcqX8eGG2LW9Jv"
  
    c := microcms.New(serviceDomain, apiKey)
  
    params := microcms.GetParams{
      Endpoint: "hello",
    }
    var data Content
    err := c.Get(params, &data)
    if err != nil {
      panic(err)
    }
  
    fmt.Printf("%+v", data)
}
