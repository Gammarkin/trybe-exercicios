const data = require('../data/zoo_data');

const { hours } = data;
const { species } = data;

const zooDays = () => {
  const obj = {};
  Object.entries(hours).forEach((dayOfTheWeek) => {
    const { open, close } = dayOfTheWeek[1];

    Object.assign(obj, {
      [dayOfTheWeek[0]]: {
        officeHour: `Open from ${open}am until ${close}pm`,
        exhibition: (species.filter((elements) =>
          elements.availability.includes(dayOfTheWeek[0]))
          .map((element) => element.name)),
      },
    });
  });
  obj.Monday = {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  };
  return obj;
};

const returnDays = (scheduleTarget) =>
  ({ [scheduleTarget]: zooDays()[scheduleTarget] });

const returnAvailability = (scheduleTarget) => species.find((element) =>
  scheduleTarget === element.name).availability;

function getSchedule(scheduleTarget) {
  // seu código aqui

  if (Object.keys(hours).includes(scheduleTarget)) return returnDays(scheduleTarget);
  if (species.map((element) =>
    element.name).includes(scheduleTarget)) return returnAvailability(scheduleTarget);

  return zooDays();
}

module.exports = getSchedule;
