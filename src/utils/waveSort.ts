// Wave Sort Algorithm
export function waveSort(arr: number[], n: number) {
  for (let i = 0; i < n; i += 2) {
    if (i > 0 && arr[i - 1] > arr[i]) swap(arr, i - 1, i);

    if (i < n - 1 && arr[i] < arr[i + 1]) swap(arr, i, i + 1);
  }

  return arr;
}

function swap(arr: number[], a: number, b: number) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
