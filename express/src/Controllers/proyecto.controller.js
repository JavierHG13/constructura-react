import Proyecto from '../Models/proyecto.model.js';


// Obtener todos los Proyectos
export const obtenerProyectos = async (req, res) => {
    try {
        const proyectos = await Proyecto.find();
        res.status(200).json({
            success: true,
            data: proyectos
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al obtener los Proyectos',
            error: error.message
        });
    }
};

// Crear un nuevo Proyecto
export const crearProyecto = async (req, res) => {
    try {
        const { nombre, descripcion, locaciones, imagenes } = req.body;

        const nuevoProyecto = new Proyecto({
            nombre,
            descripcion,
            locaciones,
            imagenes
        });

        await nuevoProyecto.save();

        res.status(201).json({
            success: true,
            message: 'Proyecto creado exitosamente',
            data: nuevoProyecto
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al crear el Proyecto',
            error: error.message
        });
    }
};

// Actualizar un Proyecto
export const actualizarProyecto = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion, locaciones, imagenes } = req.body;

        const proyectoActualizado = await Proyecto.findByIdAndUpdate(
            id,
            { nombre, descripcion, locaciones, imagenes },
            { new: true, runValidators: true }
        );

        if (!proyectoActualizado) {
            return res.status(404).json({
                success: false,
                message: 'Proyecto no encontrado'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Proyecto actualizado exitosamente',
            data: proyectoActualizado
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al actualizar el Proyecto',
            error: error.message
        });
    }
};

// Eliminar un Proyecto
export const eliminarProyecto = async (req, res) => {
    try {
        const { id } = req.params;

        const proyectoEliminado = await Proyecto.findByIdAndDelete(id);

        if (!proyectoEliminado) {
            return res.status(404).json({
                success: false,
                message: 'Proyecto no encontrado'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Proyecto eliminado exitosamente'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al eliminar el Proyecto',
            error: error.message
        });
    }
};

// Obtener un Proyecto específico por ID
export const obtenerProyectoPorId = async (req, res) => {
    try {
        const { id } = req.params;

        const proyecto = await Proyecto.findById(id);

        if (!proyecto) {
            return res.status(404).json({
                success: false,
                message: 'Proyecto no encontrado'
            });
        }

        res.status(200).json({
            success: true,
            data: proyecto
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al obtener el Proyecto',
            error: error.message
        });
    }
};
