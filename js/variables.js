const datosPropiedad = [{tipo: 'Casa', factor: 1.09},
                        {tipo: 'P.H.', factor: 1.05},
                        {tipo: 'Departamento', factor: 1.02},
                        {tipo: 'Barrio Privado', factor: 1.19},
                        {tipo: 'Oficina', factor: 2.39},
                        {tipo: 'Local Comercial', factor: 1.41},
                        ]

const datosUbicacion = [{tipo: 'Capital Federal', factor: 1.13},
                        {tipo: 'AMBA', factor: 1.04},
                        {tipo: 'Costa Atlántica', factor: 1.29},
                        {tipo: 'Interior', factor: 1.00},]

const ENV = location.href.trim()
const URL = "js/datos.json"
const costoM2 = 35.86