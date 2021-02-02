// const STATUS_CHECKS = [`in_proposal`, `commissioned`]
// import _ from 'lodash'

// class logger {
//   public static info(msg) {}
// }
// interface OpportunityType {
//   status: string
//   authors: string[]
// }
// class dbRepo {
//   public static async getById(id: string): Promise<OpportunityType[]> {
//     return [{status: 'foo', authors: ['bar']}]
//   }
// }
// interface SomeType {
//   id: string
//   isDeleted: boolean
// }

// export async function canBeDeleted(plan: SomeType): Promise<void> {
//   if (plan.isDeleted === true) {
//     const opportunity = await dbRepo.getById(plan.id)
//     if (!_.isEmpty(opportunity)) {
//       const cannotDeletePlan = _.includes(STATUS_CHECKS, opportunity[0].status) || !_.isEmpty(opportunity[0].authors)
//       if (cannotDeletePlan) {
//         const logMsg = `several lines of setting up message`
//         logger.info(logMsg)
//         const throwMsg = `more lines for a long message`
//         throw new Error(throwMsg)
//       }
//     }
//   }
// }

// export async function throwIfDeletingDisallowed(plan: SomeType): Promise<void> {
//   if (!plan.isDeleted) {
//     return
//   }
//   const opportunities = await dbRepo.getById(plan.id)
//   if (hasOpportunityInProgress(opportunities)) {
//     logAndThrowDeleteError(plan)
//   }
// }

// function hasOpportunityInProgress(opportunities: OpportunityType[]): boolean {
//   if (opportunities.length < 1) {
//     return false
//   }
//   const [firstOpportunity] = opportunities
//   return isInProgressWithAuthors(firstOpportunity)
// }

// function isInProgressWithAuthors(firstOpportunity: OpportunityType): boolean {
//   return hasInProgressStatus(firstOpportunity) || hasAuthors(firstOpportunity)
// }

// function hasAuthors(firstOpportunity: OpportunityType): boolean {
//   return firstOpportunity.authors.length > 0
// }

// function hasInProgressStatus(firstOpportunity: OpportunityType): boolean {
//   return STATUS_CHECKS.includes(firstOpportunity.status)
// }

// function hasOpportunityInProgress2(opportunities: OpportunityType[]): boolean {
//   if (hasNoOpportunities()) {
//     return false
//   }
//   const [firstOpportunity] = opportunities
//   return isInProgressWithAuthors()

//   function hasNoOpportunities() {
//     return opportunities.length < 1
//   }

//   function isInProgressWithAuthors(): boolean {
//     return hasInProgressStatus() || hasAuthors()
//   }

//   function hasInProgressStatus(): boolean {
//     return STATUS_CHECKS.includes(firstOpportunity.status)
//   }

//   function hasAuthors(): boolean {
//     return firstOpportunity.authors.length > 0
//   }
// }

// function logAndThrowDeleteError(plan: SomeType): never {
//   const logMsgPrefix = `Instructional Plan export failed because content plan named`
//   const logMsgSuffix = `could not be marked as deleted.`
//   const logMsg = `${logMsgPrefix} ${plan.learning_resource_name} ${logMsgSuffix}`
//   logger.info(logMsg)
//   const prefix = `Content plan for`
//   const suffix = `cannot be deleted because this piece of content is already being created.`
//   const postscript = `Changes made to this instructional plan have not been saved.`
//   const message = `${prefix} ${plan.learning_resource_name} ${suffix} ${postscript}`
//   throw new BadRequest(message, NO_ADDITIONAL_DATA)
// }
