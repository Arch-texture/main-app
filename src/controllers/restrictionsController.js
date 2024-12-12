const {
  studentExistsUS,
} = require("../clients/usersServiceClient");


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
    const { studentsId, restrictionReason } = req.body;

    for (const studentId of studentsId) {
      const validateStudentExistsCall = await studentExistsUS(studentId);
    }

    let createdRestrictions;

    for (const studentId of studentsId) {
      const createRestrictionCall = await createRestrictionRS(
        studentId,
        restrictionReason
      );
      createdRestrictions.push(createRestrictionCall);
    }

    const dbConsistencyCall = await addRestrictionSS(createRestrictionCall);

    res.status(200).json({
      msg: "createRestriction",
      data: createRestrictionCall,
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