module.exports = {
  fhirReference: function(input, prefix, inverse) {
    if (!inverse) return prefix + '/' + input;
    return input.split(prefix + '/')[1];
  },
  rippleDateTime: function(input, inverse) {
    if (inverse) {
      if (!input || input === '') return '';
      return new Date(input).getTime();
    }
    if (!input) return new Date().toISOString();
    return new Date(input).toISOString();
  },
  fhirSnomed: function(input, inverse) {
    if (input === '') return '<!delete>';
    if (!inverse) {
      if (input === 'SNOMED-CT') return 'http://snomed.info/sct';
      return input;
    }
    if (input === 'http://snomed.info/sct') return 'SNOMED-CT';
    return input;
  }
};