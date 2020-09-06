import React from 'react'
import CourseCard from '../Molecules/CourseCard'

import withLoader from '../HOC/withLoader'

const CourseGrid = ({cursos}) => (
    <div className="ed-grid m-grid-4">
                {
                     cursos.map(c => (<CourseCard
                        key={c.id} 
                        id={c.id}
                        title={c.title} 
                        image={c.image} 
                        nombre={c.nombre} 
                        apellido={c.apellido} 
                        foto={c.foto} 
                        />
                        ))  
                }
            </div>
)
//Asi se llama al componente de Orden Superior
export default withLoader("cursos",CourseGrid) 