const { studentExistsUS } = require("../clients/usersServiceClient");

const {
  createRestrictionRS,
  restrictionExistsRS,
  removeRestrictionRS,
} = require("../clients/restrictionsServiceClient");

const {
  addRestrictionSS,
  deleteRestrictionSS,
  searchByRestrictionSS,
} = require("../clients/searchServiceClient");

const createRestriction = async (req, res) => {
  try {
    console.log("api createRestriction");
    const { students, reason } = req.body;
    console.log(students, reason);

    await Promise.all(
      students.map((studentId) => studentExistsUS(studentId.id))
    );

    const createdRestrictions = await Promise.all(
      students.map((studentId) => createRestrictionRS(reason, studentId))
    );

    const dbConsistencyCall = await addRestrictionSS(createdRestrictions);

    res.status(200).json({
      msg: "createRestriction",
      data: createdRestrictions,
    });
  } catch (error) {
    console.log(error);

    res.status(error.status ? error.status : 500).json({
      success: false,
      error: true,
      msg: error.message,
    });
  }
};

const removeRestriction = async (req, res) => {
  try {
    console.log("api removeRestriction");

    const { query } = req.body;

    const restrictionExistsCall = await restrictionExistsRS(query);

    const restrictionUUID = restrictionExistsCall.restrictions.uuid;

    const searchByRestrictionCall = await searchByRestrictionSS(
      restrictionUUID
    );

    for (const studentId of searchByRestrictionCall.id) {
      const removeRestrictionCall = await removeRestrictionRS(
        restrictionUUID,
        studentId
      );
    }

    const dbConsistencyCall = await deleteRestrictionSS(restrictionUUID);

    res.status(200).json({
      msg: "removeRestriction",
      data: removeRestrictionCall,
    });
  } catch (error) {
    console.log(error.message);

    res.status(error.status ? error.status : 500).json({
      success: false,
      error: true,
      msg: error.message,
    });
  }
};

module.exports = {
  createRestriction,
  removeRestriction,
};
