const Post = require('../models/caseModel');

exports.getAllPost = async (req, res) => {
    try {
        const post = await Post.find();
        res.status(200).json({
            status: 'success',
            data: {
                data: post,
            },
        });
    } catch (err) {
        console.log(err);
        res.status(404).json({
            status: 'error',
        });
    }
};

exports.getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                data: post,
            },
        });
    } catch (err) {
        console.log(err);
        res.status(404).json({
            status: 'error',
        });
    }
};

exports.createPost = async (req, res) => {
    try {
        const post = await Post.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                data: post,
            },
        });
    } catch (err) {
        console.log(err);
        res.status(404).json({
            status: 'error',
        });
    }
};
