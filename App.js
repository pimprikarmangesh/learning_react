const heading = React.createElement(
  'div',
  { className: 'heading' },
  [React.createElement('h1',{"key":"h1"},"H1 tag"),
  React.createElement('h2',{"key":"h2"},"H2 tag")]
)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)
