const { Product } = require('../models');

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    console.error('Get all products error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get product by slug
exports.getProductBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const product = await Product.findOne({ where: { slug } });
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    res.status(200).json(product);
  } catch (error) {
    console.error('Get product by slug error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get products by category
exports.getProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const products = await Product.findAll({ 
      where: { category },
      order: [['createdAt', 'DESC']]
    });
    
    res.status(200).json(products);
  } catch (error) {
    console.error('Get products by category error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new product (admin only)
exports.createProduct = async (req, res) => {
  try {
    const { 
      name, description, price, images, 
      category, tags, sizes, colors, stock 
    } = req.body;
    
    // Generate slug from name
    const slug = name
      .toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-');
    
    // Check if slug already exists
    const productExists = await Product.findOne({ where: { slug } });
    if (productExists) {
      return res.status(400).json({ message: 'Product with this name already exists' });
    }
    
    const product = await Product.create({
      name,
      slug,
      description,
      price,
      images,
      category,
      tags,
      sizes,
      colors,
      stock
    });
    
    res.status(201).json(product);
  } catch (error) {
    console.error('Create product error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update product (admin only)
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { 
      name, description, price, images, 
      category, tags, sizes, colors, stock 
    } = req.body;
    
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    // If name is updated, update slug too
    let updateData = {
      description, price, images, category, 
      tags, sizes, colors, stock
    };
    
    if (name && name !== product.name) {
      const slug = name
        .toLowerCase()
        .replace(/[^\w ]+/g, '')
        .replace(/ +/g, '-');
      
      // Check if new slug already exists
      const slugExists = await Product.findOne({ 
        where: { slug },
        attributes: ['id']
      });
      
      if (slugExists && slugExists.id !== id) {
        return res.status(400).json({ message: 'Product with this name already exists' });
      }
      
      updateData.name = name;
      updateData.slug = slug;
    }
    
    await product.update(updateData);
    
    res.status(200).json(product);
  } catch (error) {
    console.error('Update product error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete product (admin only)
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    await product.destroy();
    
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Delete product error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
