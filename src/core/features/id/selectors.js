export function getId(state) {
  return state.id;
}

export function getAge(state) {
  return getId(state).age;
}

export function getBirthday(state) {
  return getId(state).birthday;
}

export function getName(state) {
  return getId(state).name;
}

export function getSex(state) {
  return getId(state).sex;
}

export function getSurname(state) {
  return getId(state).surname;
}
