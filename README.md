APIRest

<h4 class="code-line" data-line-start=116 data-line-end=117 ><a id="1_Documentar_en_el_archivo_READMEmd_todos_los_metodos_soportados_de_la_API_incluyendo_los_dos_talleres_anteriores_116"></a>1. Documentar en el archivo <a href="http://README.md">README.md</a> todos los métodos soportados de la API; incluyendo los dos talleres anteriores.</h4>
<pre><code>  https://github.com/EstudianteUninorte/Taller-3/blob/master/README.md
</code></pre>
</li>
<li class="has-line-data" data-line-start="119" data-line-end="120">
<h4 class="code-line" data-line-start=119 data-line-end=120 ><a id="2_Tests_Implementar_por_lo_menos_3_tests_del_modelo_User_119"></a>2. Tests: Implementar por lo menos 3 tests del modelo User</h4>
</li>
</ul>
<ul>
<li class="has-line-data" data-line-start="124" data-line-end="125">
<h4 class="code-line" data-line-start=124 data-line-end=125 ><a id="3_Tests_Implementar_por_lo_menos_2_tests_del_controlador_users_124"></a>3. Tests: Implementar por lo menos 2 tests del controlador users.</h4>
</li>
<li class="has-line-data" data-line-start="125" data-line-end="126">
<h4 class="code-line" data-line-start=125 data-line-end=126 ><a id="4_Tests_Implementar_ejecucion_de_tests_automatizados_en_circleCI_125"></a>4. Tests: Implementar ejecución de tests automatizados en circleCI</h4>
</li>
<li class="has-line-data" data-line-start="126" data-line-end="136">
<h4 class="code-line" data-line-start=126 data-line-end=127 ><a id="5_Roles_y_Permisos_Definir_2_nuevos_modelos_Permission_y_Role_La_relacion_entre_los_modelos_es_la_siguiente_User_role_ids____Role_permission_ids____Permission_126"></a>5. Roles y Permisos: Definir 2 nuevos modelos Permission y Role. La relación entre los modelos es la siguiente: User (role_ids: [ ]) -&gt; Role (permission_ids: [ ]) -&gt; Permission.</h4>
<p class="has-line-data" data-line-start="127" data-line-end="129">Modelo permission<br>
/api/models/permission/index.js</p>
<p class="has-line-data" data-line-start="130" data-line-end="132">Modelo Role<br>
/api/models/role/index.js</p>
<p class="has-line-data" data-line-start="133" data-line-end="135">Relacion user - Role<br>
/api/models/users/index.js</p>
</li>
<li class="has-line-data" data-line-start="136" data-line-end="172">
<h4 class="code-line" data-line-start=136 data-line-end=137 ><a id="6_Roles_y_Permisos__Agregar_datos_136"></a>6. Roles y Permisos - Agregar datos:</h4>
<ul>
<li class="has-line-data" data-line-start="137" data-line-end="147">
<p class="has-line-data" data-line-start="137" data-line-end="140">Se debe crear en el modelo Permission el permiso “listar usuarios”.<br>
Ejecutar en postman<br>
<a href="http://localhost:3000/api/permissions/">http://localhost:3000/api/permissions/</a></p>
<p class="has-line-data" data-line-start="141" data-line-end="146">Pasar en el body lo siguiente<br>
{<br>
nombrepermiso:  “nombre persmiso”,<br>
codigopermiso:  “codigo permiso”<br>
}</p>
</li>
<li class="has-line-data" data-line-start="147" data-line-end="156">
<p class="has-line-data" data-line-start="147" data-line-end="155">Se debe crear en el modelo Role el rol “administrador”, y debe tener el permiso “listar usuarios”<br>
Ejecutar en postman<br>
<a href="http://localhost:3000/api/roles/">http://localhost:3000/api/roles/</a><br>
Pasar en el body lo siguiente<br>
{<br>
roleName: “nombre rol”,<br>
permission_ids:  “id del permiso a asociar”<br>
}</p>
</li>
<li class="has-line-data" data-line-start="156" data-line-end="171">
<p class="has-line-data" data-line-start="156" data-line-end="170">Se debe crear un usuario (username: admin, password: 12345) con el rol asociado “administrador”<br>
Ejecutar en postman<br>
<a href="http://localhost:3000/api/users/">http://localhost:3000/api/users/</a><br>
Pasar en el body lo siguiente<br>
{<br>
“name”:“nombre usuario”,<br>
“age”: edad,<br>
“username”: “usuario”,<br>
“password”: “password”,<br>
“email”: “email”,<br>
“birthdate”: “1994-01-26”,<br>
“telephones”: [3223325],<br>
“role_ids”: [“id del rol a donde se quiere asignar”]<br>
}</p>
</li>
<li class="has-line-data" data-line-start="171" data-line-end="172">
<p class="has-line-data" data-line-start="171" data-line-end="172"><em>Estas acciones se deben ejecutar en su base de datos en mongodb cloud</em></p>
</li>
</ul>
</li>
<li class="has-line-data" data-line-start="172" data-line-end="174">
<h4 class="code-line" data-line-start=172 data-line-end=173 ><a id="7_Crear_un_middleware_para_restringir_que_el_acceso_al_recurso_GET_apiusers_solo_puede_ser_valido_para_los_usuarios_que_tengan_el_rol_con_el_permiso_listar_usuarios_es_decir_si_otro_usuario_autenticado_no_tiene_el_rol_con_el_permiso_listar_usuario_no_debe_acceder_al_recurso_Agregar_como_respuesta_a_esta_peticion_HTTP_los_roles_y_permisos_de_cada_usuario_en_el_array_de_salida_si_tiene_172"></a>7. Crear un middleware para restringir que el acceso al recurso GET /api/users solo puede ser válido para los usuarios que tengan el rol con el permiso “listar usuarios”; es decir, si otro usuario autenticado no tiene el rol con el permiso “listar usuario” no debe acceder al recurso. Agregar como respuesta a esta petición HTTP, los roles y permisos de cada usuario en el array de salida (si tiene).</h4>
<p class="has-line-data" data-line-start="173" data-line-end="174">Pendiente</p>
</li>
</ul>
<ul>
<li class="has-line-data" data-line-start="176" data-line-end="177">
<h4 class="code-line" data-line-start=176 data-line-end=177 ><a id="8_Restringir_el_acceso_a_los_siguientes_recursos_dentro_de_la_ruta_apitweets_unicamente_a_los_usuarios_autenticados_en_caso_de_crear_un_nuevo_recurso_dentro_de_la_ruta_apitweets_tambien_se_deberia_tener_la_validacion_del_middleware_176"></a>8. Restringir el acceso a los siguientes recursos dentro de la ruta /api/tweets únicamente a los usuarios autenticados; en caso de crear un nuevo recurso dentro de la ruta /api/tweets, también se debería tener la validación del middleware.</h4>
</li>
<li class="has-line-data" data-line-start="177" data-line-end="188">
<h4 class="code-line" data-line-start=177 data-line-end=178 ><a id="Validaciones_177"></a>Validaciones:</h4>
<p class="has-line-data" data-line-start="178" data-line-end="179">Pendiente</p>
<ul>
<li class="has-line-data" data-line-start="179" data-line-end="180">Validar que al crear un usuario, no se puede reutilizar el mismousername ni el mismo email.</li>
<li class="has-line-data" data-line-start="180" data-line-end="188">Validar con una expresión regular que la contraseña de un nuevo<br>
usuario debe tener por lo menos:<br>
■  8 caracteres<br>
■ 1 mayúscula<br>
■ 1 minúscula<br>
■ 1 número<br>
■ 1 caracter especial</li>
</ul>
</li>
<li class="has-line-data" data-line-start="188" data-line-end="192">
<h4 class="code-line" data-line-start=188 data-line-end=189 ><a id="9_Definir_en_el_recurso_DELETE_apitweets_Borrar_tweet_que_esta_accion_solo_puede_ser_ejecutada_por_el_mismo_usuario_quien_creo_el_tweet_188"></a>9. Definir en el recurso DELETE /api/tweets/ (Borrar tweet) que esta acción solo puede ser ejecutada por el mismo usuario quien creó el tweet</h4>
<pre><code>  Pendiente
</code></pre>
</li>
</ul>
