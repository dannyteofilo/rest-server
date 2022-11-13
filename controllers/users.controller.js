const { response, request } = require("express");
const usersGet = (req= request, res = response) => {
    const params=req.query;
  res.json({ msg: "Get API -controller" ,params});
};

const usersPost = (req, res = response) => {
  const body = req.body;
  res.json({ msg: "POST API -controller", body });
};

const usersPut = (req, res = response) => {
    const {id}=req.params
  res.json({ msg: "PUT API -controller",id });
};

const usersDelete = (req, res = response) => {
  res.json({ msg: "DELETE API -controller" });
};

const usersPatch = (req, res = response) => {
  res.json({ msg: "PATCH API -controller" });
};

module.exports = {
  usersGet,
  usersPost,
  usersPut,
  usersPatch,
  usersDelete,
};
