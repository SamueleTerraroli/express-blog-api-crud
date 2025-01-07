const express = require ('express');

const router = express.Router;

router.get('/' , postsController.index);
router.get('/:id' , postsController.show);
router.post('/' , postsController.store);
router.put('/:id' , postsController.update);
router.patch('/:id' , postsController.modify);
router.delete('/:id' , postsController.destroy);

module.exports = router: