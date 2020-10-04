export function css(node, properties) {
  function setProperties() {
    if (properties) {
      for (const prop of Object.keys(properties)) {
        node.style.setProperty(`--${prop}`, properties[prop]);
      }
    }
  }

  setProperties();

  return {
    update(newProperties) {
      properties = newProperties;
      setProperties();
    },
  };
}
