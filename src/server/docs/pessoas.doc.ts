/**
 * @swagger
 * /pessoas:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Pessoas
 *     summary: Listando pessoas
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /pessoas/:id:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Pessoas
 *     summary: Buscando uma pessoa
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /pessoas:
 *   post:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Pessoas
 *     summary: Cadastrando uma pessoa
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *           examples:    # Child of media type
 *             Jessica:   # Example 1
 *               value:
 *                 id: 10
 *                 name: Jessica Smith
 *             Ron:       # Example 2
 *               value:
 *                 id: 11
 *                 name: Ron Stewart
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /pessoas/:id:
 *   delete:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Pessoas
 *     summary: Excluíndo uma pessoa
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /pessoas/:id:
 *   put:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Pessoas
 *     summary: Atualizando uma pessoa
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */
