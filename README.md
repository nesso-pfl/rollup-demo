# rollup-demo
rollup のお試しとか

## 動かす前に
`yarn` たたくひつようあります

## やれること
以下を叩いてちゃんといい感じにビルドし分けられているか, build ディレクトリをみて確認してみてね

- `yarn build` でソースコード全体をビルド
  - `yarn build -i all` でも良い
- `yarn build -i <component-name>` でコンポーネント単体をビルド
  - コンポーネントは Button と Label があるよ
  - 大文字キャメルケースにしてね