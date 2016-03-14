const template = (files, fallback = "/") => {
  if (!Array.isArray(files)) {
    throw new Error(
      "You must provide an array for " +
      `generating appcache template\n` +
      `You are prodiving "${ typeof files }"`
    )
  }

  return `CACHE MANIFEST
# Appcache generated by Statinamic
${ files.join("\n") }

NETWORK:
*

FALLBACK:
${ fallback } ${ fallback }`

}

export default template
