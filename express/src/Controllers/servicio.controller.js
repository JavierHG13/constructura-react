import Servicio from '../Models/servicio.model.js';

// Obtener todos los servicios
export const obtenerServicios = async (req, res) => {
    try {
        const servicios = await Servicio.find();
        res.status(200).json({
            success: true,
            data: servicios
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al obtener los servicios',
            error: error.message
        });
    }
};

// Crear un nuevo servicio 
export const crearServicio = async (req, res) => {
    try {
        const { nombre, descripcion, precio, imgURL } = req.body;

        const nuevoServicio = new Servicio({
            nombre,
            descripcion,
            precio,
            imgURL
        });

        await nuevoServicio.save();

        res.status(201).json({
            success: true,
            message: 'Servicio creado exitosamente',
            data: nuevoServicio
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al crear el servicio',
            error: error.message
        });
    }
};

// Actualizar un servicio 
export const actualizarServicio = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion, precio, imgURL } = req.body;

        const servicioActualizado = await Servicio.findByIdAndUpdate(
            id,
            { nombre, descripcion, precio, imgURL },
            { new: true, runValidators: true }
        );

        if (!servicioActualizado) {
            return res.status(404).json({
                success: false,
                message: 'Servicio no encontrado'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Servicio actualizado exitosamente'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al actualizar el servicio',
            error: error.message
        });
    }
};

// Eliminar un servicio
export const eliminarServicio = async (req, res) => {
    try {
        const { id } = req.params;

        const servicioEliminado = await Servicio.findByIdAndDelete(id);

        if (!servicioEliminado) {
            return res.status(404).json({
                success: false,
                message: 'Servicio no encontrado'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Servicio eliminado exitosamente'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al eliminar el servicio',
            error: error.message
        });
    }
};

// Obtener un servicio específico por ID
export const obtenerServicioPorNombre = async (req, res) => {
    try {
        const { nombre } = req.params;

        const servicio = await Servicio.findOne({ nombre });

        if (!servicio) {
            return res.status(404).json({
                success: false,
                message: 'Servicio no encontrado'
            });
        }

        res.status(200).json({
            success: true,
            data: servicio
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al obtener el servicio',
            error: error.message
        });
    }
};