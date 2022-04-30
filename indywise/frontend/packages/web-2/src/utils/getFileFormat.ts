export const getFileFormat = (fileName: string): string => {
  let format: string[] = [];

  for (let i = 0; i < fileName.length; i++) {
    // There can be more than one `.` decimal like `my.resume.pdf`, we reset
    // `format` everytime we encouter a `.` decimal in teh file name because the
    // file format extension will start before the last `.` in the name.
    if (fileName[i] === '.') {
      format = [];
      for (let j = ++i; j < fileName.length; j++) {
        format.push(fileName[j]);
      }
    }
  }

  // convert the array which looks something like this ["p", "d", "f"] to "pdf"
  return format.join('');
};
