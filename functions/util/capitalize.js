
export default (s="s", titlecase=false) => s.charAt(0).toUpperCase() + `${titlecase ? s.slice(1).toLowerCase() : s.slice(1)}`