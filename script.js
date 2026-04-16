function setDisplay(type) 
{
  const container = document.getElementById("container");
  container.className = "border p-4 min-h-[150px]";
  if (type === "block") {
    container.classList.add("block");
  }
  if (type === "inline") {
    container.classList.add("inline");
  }
  if (type === "inline-block") {
    container.classList.add("inline-block");
  }
  if (type === "flex") {
    container.classList.add("flex", "gap-2");
  }
  if (type === "grid") {
    container.classList.add("grid", "gap-2");
  }
  if (type === "hidden") {
    container.classList.add("hidden");
  }
}
