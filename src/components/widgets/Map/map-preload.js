const getMapJSON = require('dotted-map').getMapJSON;

// This function accepts the same arguments as DottedMap in the example above.
const mapJsonString = getMapJSON({ height: 60, grid: 'diagonal' });

export default mapJsonString;