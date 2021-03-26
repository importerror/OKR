function filterData(data) {
  let hashMap = {};
  let tree = [];
  let finalData = [];

  data.data.forEach((item) => {
    if (item.parent_objective_id == "") {
      !hashMap.hasOwnProperty(item.id) && (hashMap[item.id] = []);
      tree.push(item);
    } else {
      if (hashMap[item.parent_objective_id] !== undefined) {
        hashMap[item.parent_objective_id].push(item);
      }
    }
  });

  finalData = tree.map((item) => {
    return { ...item, child: [...hashMap[item.id]] };
  });

  return finalData;
}


export { filterData };
