# 基本イメージ
FROM golang:latest

# 作業ディレクトリの設定
WORKDIR /app

# モジュールのコピー
COPY go.mod .
COPY go.sum .

# 依存関係のダウンロード
RUN go mod download

# ソースコードのコピー
COPY . .

# アプリケーションのビルド
RUN go build -o main .

# アプリケーションの実行
CMD ["./main"]
