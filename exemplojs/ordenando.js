const swap = (arr, pos1, pos2) => {
    [arr[pos1], arr[pos2]] = [arr[pos2], arr[pos1]];
};

const shuffle = (arr, numSwaps) => {
    for (let i = 0; i < numSwaps; i++) {
        const pos1 = Math.floor(Math.random() * arr.length);
        const pos2 = Math.floor(Math.random() * arr.length);
        swap(arr, pos1, pos2);
    }
};

const bubble_sort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
};

const selection_sort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            swap(arr, i, minIndex);
        }
    }
};

const quick_sort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
        const pivot = arr[right];
        let i = left - 1;
        for (let j = left; j <= right - 1; j++){
            if (arr[j] < pivot) {
                i++;
                swap(arr, i, j);
            }
        }

        swap(arr, i + 1, right);
        const pivotIndex = i + 1;
        quick_sort(arr, left, pivotIndex - 1);
        quick_sort(arr, pivotIndex + 1, right);
    }
};

const particionamento = (arr, start, end, pivot) => {
    let left = start;
    let right = end - 1;

    while(true) {
        while(arr[left] < pivot) {
            left++;
        }

        while (right > 0 && arr[right] > pivot) {
            right--;
        }

        if (left >= right) {
            break;
        } else {
            swap(arr, left, right);
        }
    }

    swap(arr, left, end - 1);
    return left;
};