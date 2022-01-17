### pages

- HTML に Render するためには export default function からユーザーに見せたいものを Return する

### Static Pre-Rendering

- Next.js は Pre-rendering を対応する。Client-Side で Rendering しなくても、初期状態のページが Render される。

### Link

- リンクを持つ anchor tag は next/link(Link)を使う

### Routing

- pages directory の中のファイル名が自動的に Routes になる。

### styled-jsx

- style タグの中に css を定義すると、そのコンポーネントを範囲に CSS が適用される。親コンポーネントには反映されない。
- style jsx global で親から子コンポーネントへ適用する

### \_app.js

- レンダーリングするときの Blueprint になる
