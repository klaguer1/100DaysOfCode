const ObjectLogger = ({ value, replacer = null, space = 2 }) => (
  <pre>
    <code>{JSON.stringify(value, replacer, space)}</code>
  </pre>
);

export default ObjectLogger;
