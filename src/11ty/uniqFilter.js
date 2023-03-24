module.exports = function uniqFilter(value){
  if(Array.isArray(value)) {
    value = [ ... new Set(value) ];
  }
  return value;
}

