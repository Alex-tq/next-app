import {articles} from '../../../data.js'

export default function handler(req, res) {
    const {id} = req.query
    const article = articles.find(article => article.id === id)
    if(article){
        res.status(200).json(article)
    } else {
        res.status(404).json({message: `article with the id of ${id} was not found`})
    }
}
    