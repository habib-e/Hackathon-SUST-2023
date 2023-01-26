export function selectionSort(arr) {
  const pairs = [];
  let n = arr.length;
  const prevRect = arr.slice();
  // One by one move boundary of unsorted subarray
  for (let i = 0; i < n - 1; i++) {
    let min_idx = i;
    for (let j = i + 1; j < n; j++) {
      pairs.push({
        xx: min_idx,
        yy: j,
        changed: false,
      });
      if (prevRect[j].width < prevRect[min_idx].width) {
        min_idx = j;
      }
    }

    // Swap the found minimum element with the first
    // element
    const recti = { ...prevRect[i] };
    const rectj = { ...prevRect[min_idx] };
    prevRect[min_idx] = recti;
    prevRect[i] = rectj;
    pairs.push({
      xx: min_idx,
      yy: i,
      changed: true,
    });
    pairs.push({
      xx: i,
      yy: i,
      changed: false,
    });
  }
  pairs.push({
    xx: n - 1,
    yy: n - 1,
    changed: false,
  });
  return pairs;
}
