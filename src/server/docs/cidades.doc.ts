/**
 * @swagger
 * /cidades:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Cidades
 *     summary: Listage de cidades
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /cidades/:id:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Cidades
 *     summary: Consulta de uma cidade
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /cidades:
 *   post:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Cidades
 *     summary: Cadastro de uma nova cidade
 *     description: description example
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *             properties:
 *               nome:
 *                 type: string
 *                 example: Guarulhos
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /cidades/:id:
 *   delete:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Cidades
 *     summary: Excluído uma cidade
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /cidades/:id:
 *   put:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Cidades
 *     summary: Atualizando uma cidade
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */
