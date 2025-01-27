import { RelationshipFieldValidation } from 'payload'

export const validateRelationship: RelationshipFieldValidation = (
  value,
  { previousValue, req },
) => {
  req.payload.logger.info(`[validateRelationship - start]`)
  req.payload.logger.fatal(`previousValue: ${previousValue}`)
  req.payload.logger.info(`value: ${value}`)
  req.payload.logger.info(`[validateRelationship - end]`)
  return true
}
