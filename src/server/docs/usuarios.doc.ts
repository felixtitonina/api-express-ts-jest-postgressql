/**
 * @swagger
 * /usuarios/cadastrar:
 *   post:
 *     tags:
 *      - Usuarios
 *     summary: Cadastrar
 *     description: Cadastrar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - email
 *               - senha
 *             properties:
 *               nome:
 *                 type: string
 *                 example: felix tito
 *                 minimum: 5
 *                 limit: 150
 *               email:
 *                 type: string
 *                 example: jorge1@gmail.com
 *                 format: email
 *                 minimum: 5
 *                 limit: 150
 *               senha:
 *                 type: string
 *                 example: 123456
 *                 minimum: 5
 *                 limit: 150
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /usuarios/entrar:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: Autenticação
 *     description: Autenticação
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - senha
 *             properties:
 *               email:
 *                 type: string
 *                 example: jorge@gmail.com
 *                 format: email
 *                 minimum: 5
 *                 limit: 150
 *               senha:
 *                 type: string
 *                 example: 123456
 *                 minimum: 5
 *                 limit: 150
 *     responses:
 *       200:
 *         description: Login successful
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */
