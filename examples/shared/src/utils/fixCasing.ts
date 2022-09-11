function fixCasing(str: string) {
  return str
    .split("-")
    .map(
      (part) => part.charAt(0).toUpperCase() + part.substring(1).toLowerCase()
    )
    ?.join(" ");
}

export { fixCasing };
