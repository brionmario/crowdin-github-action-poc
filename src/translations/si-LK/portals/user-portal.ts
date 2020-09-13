/**
 * Copyright (c) 2020, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { UserPortalNS } from "../../../models";
export const userPortal: UserPortalNS = {
  components: {
    accountRecovery: {
      codeRecovery: {
        descriptions: {
          add: "කේත ප්‍රතිසාධන විකල්ප එකතු කිරීම හෝ යාවත්කාලීන කිරීම"
        },
        heading: "කේත ප්‍රතිසාධනය"
      },
      emailRecovery: {
        descriptions: {
          add: "ප්‍රතිසාධන ඊමේල් තැපැල් ලිපිනයක් එක් කරන්න",
          update: "ප්‍රතිසාධන ඊමේල් තැපැල් ලිපිනය යාවත්කාලීන කරන්න ({{email}})"
        },
        forms: {
          emailResetForm: {
            inputs: {
              email: {
                label: "ඊමේල් ලිපිනය",
                placeholder: "ප්‍රතිසාධන ඊමේල් ලිපිනය ඇතුළත් කරන්න",
                validations: {
                  empty: "ඊමේල් ලිපිනයක් ඇතුළත් කරන්න",
                  invalidFormat: "ඊමේල් ලිපිනය නිවැරදි ආකෘතියෙන් නොවේ"
                }
              }
            }
          }
        },
        heading: "ඊමේල් ප්‍රතිසාධනය",
        notifications: {
          updateEmail: {
            error: {
              description: "{{description}}",
              message: "ප්‍රතිසාධන ඊමේල් ලිපිනය යාවත්කාලීන කිරීමේදී දෝෂයක් ඇතිවිය"
            },
            genericError: {
              description: "ප්‍රතිසාධන ඊමේල් ලිපිනය යාවත්කාලීන කිරීමේදී දෝෂයක් ඇතිවිය",
              message: "දෝෂයක් ඇතිවිය !!!"
            },
            success: {
              description: "පරිශීලක පැතිකඩෙහි ඊමේල් ලිපිනය සාර්ථකව යාවත්කාලීන කර ඇත",
              message: "ඊමේල් ලිපිනය සාර්ථකව යාවත්කාලීන කර ඇත"
            }
          }
        }
      },
      questionRecovery: {
        descriptions: {
          add: "ගිණුම් ප්‍‍රතිසාධන අභියෝග ප්‍‍රශ්න එකතු කිරීම හා යාවත්කාලීන කිරීම"
        },
        forms: {
          securityQuestionsForm: {
            inputs: {
              answer: {
                label: "පිළිතුර",
                placeholder: "ඔබේ පිළිතුර ඇතුළත් කරන්න",
                validations: {
                  empty: "පිළිතුර අත්‍යවශ්‍ය ක්ෂේත්‍රයකි"
                }
              },
              question: {
                label: "ප්‍රශ්නය",
                placeholder: "ආරක්ෂක ප්‍රශ්නයක් තෝරන්න",
                validations: {
                  empty: "අවම වශයෙන් එක් ආරක්ෂක ප්‍රශ්නයක්වත් තෝරා ගත යුතුය"
                }
              }
            }
          }
        },
        heading: "ආරක්ෂක ප්‍රශ්න",
        notifications: {
          addQuestions: {
            error: {
              description: "{{description}}",
              message: "ආරක්ෂක ප්‍රශ්න වින්‍යාස කිරීමේදී දෝෂයක් ඇතිවිය"
            },
            genericError: {
              description: "ආරක්ෂක ප්‍රශ්න වින්‍යාස කිරීමේදී දෝෂයක් ඇතිවිය",
              message: "දෝෂයක් ඇතිවිය !!!"
            },
            success: {
              description: "අවශ්‍ය ආරක්ෂක ප්‍රශ්න සාර්ථකව එකතු කරන ලදි",
              message: "ආරක්ෂක ප්‍රශ්න සාර්ථකව එකතු කරන ලදි"
            }
          },
          updateQuestions: {
            error: {
              description: "{{description}}",
              message: "ආරක්ෂක ප්‍රශ්න යාවත්කාලීන කිරීමේදී දෝෂයක් ඇතිවිය"
            },
            genericError: {
              description: "ආරක්ෂක ප්‍රශ්න යාවත්කාලීන කිරීමේදී දෝෂයක් ඇතිවිය",
              message: "දෝෂයක් ඇතිවිය !!!"
            },
            success: {
              description: "අවශ්‍ය ආරක්ෂක ප්‍රශ්න සාර්ථකව යාවත්කාලීන කරන ලදි",
              message: "ආරක්ෂක ප්‍රශ්න සාර්ථකව යාවත්කාලීන කරන ලදි"
            }
          }
        }
      }
    },
    advancedSearch: {
      form: {
        inputs: {
          filterAttribute: {
            label: "පෙරහන් ගුණාංගය",
            placeholder: "උදා: නම, විස්තරය ආදිය.",
            validations: {
              empty: "පෙරහන් ගුණාංගය අවශ්‍ය ක්ෂේත්‍රයකි"
            }
          },
          filterCondition: {
            label: "පෙරහන් තත්වය",
            placeholder: "උදා: සමඟ ආරම්භ වේ.",
            validations: {
              empty: "පෙරහන් තත්ත්වය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි"
            }
          },
          filterValue: {
            label: "පෙරහන් අගය",
            placeholder: "උදා: admin, wso2 ආදිය.",
            validations: {
              empty: "පෙරහන් අගය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි"
            }
          }
        }
      },
      hints: {
        querySearch: {
          actionKeys: "Shift + Enter",
          label: "විමසුමක් ලෙස සෙවීමට"
        }
      },
      options: {
        header: "සංකීර්ණ සෙවීම"
      },
      placeholder: "නමින් සොයන්න",
      popups: {
        clear: "මකන්න",
        dropdown: "විකල්ප පෙන්වන්න"
      },
      resultsIndicator: "{{query}} සඳහා ප්රතිපල"
    },
    applications: {
      advancedSearch: {
        form: {
          inputs: {
            filterAttribute: {
              placeholder: "උදා: නම, විස්තරය ආදිය."
            },
            filterCondition: {
              placeholder: "උදා: සමඟ ආරම්භ වේ."
            },
            filterValue: {
              placeholder: "උදා: admin, wso2 ආදිය."
            }
          }
        },
        placeholder: "නමින් සොයන්න"
      },
      all: {
        heading: "සියලුම ඇප්ස්"
      },
      favourite: {
        heading: "ප්රියතම ඇප්ස්"
      },
      notifications: {
        fetchApplications: {
          error: {
            description: "{{description}}",
            message: "ඇප්ස් ලබා ගැනීමේ දෝෂයකි"
          },
          genericError: {
            description: "ඇප්ස් ලබා ගැනීමේ දෝෂයකි",
            message: "දෝෂයක් ඇතිවිය"
          },
          success: {
            description: "ඇප්ස් සාර්ථකව ලබා ගන්නා ලදි.",
            message: "සාර්ථකයි"
          }
        }
      },
      placeholders: {
        emptyList: {
          action: "ලැයිස්තුව නැවුම් කරන්න",
          subtitles: {
            0: "The applications list returned empty.",
            1: "This could be due to having no discoverable applications.",
            2: "Please ask an admin to enable discoverability for applications."
          },
          title: "ඇප්ස් නොමැත"
        }
      },
      recent: {
        heading: "මෑතකදී විවෘත කළ ඇප්ස්"
      }
    },
    approvals: {
      notifications: {
        fetchApprovalDetails: {
          error: {
            description: "{{description}}",
            message: "අනුමත තොරතුරු ලබා ගැනීමේදී දෝෂයක් ඇතිවිය"
          },
          genericError: {
            description: "අනුමත තොරතුරු යාවත්කාලීන කිරීමට නොහැකි විය",
            message: "දෝෂයක් ඇතිවිය !!!"
          },
          success: {
            description: "අනුමත තොරතුරු සාර්ථකව ලබා ගන්නා ලදි",
            message: "අනුමත තොරතුරු ලබා ගැනීම සාර්ථකයි"
          }
        },
        fetchPendingApprovals: {
          error: {
            description: "{{description}}",
            message: "අපේක්ෂිත අනුමැතිය ලබා ගැනීමේ දෝෂයකි"
          },
          genericError: {
            description: "අපේක්ෂිත අනුමත ලබා ගැනීමට නොහැකි විය",
            message: "දෝෂයක් ඇතිවිය !!!"
          },
          success: {
            description: "අපේක්ෂිත අනුමත කිරීම් සාර්ථකව ලබා ගන්නා ලදි",
            message: "අපේක්ෂිත අනුමත කිරීම් නැවත ලබා ගැනීම සාර්ථකයි"
          }
        },
        updatePendingApprovals: {
          error: {
            description: "{{description}}",
            message: "අනුමැතිය යාවත්කාලීන කිරීමේදී දෝෂයකි"
          },
          genericError: {
            description: "අනුමැතිය යාවත්කාලීන කළ නොහැක",
            message: "දෝෂයක් ඇතිවිය !!!"
          },
          success: {
            description: "අනුමැතිය සාර්ථකව යාවත්කාලීන කරන ලදි",
            message: "යාවත්කාලීන කිරීම සාර්ථකයි"
          }
        }
      }
    },
    changePassword: {
      forms: {
        passwordResetForm: {
          inputs: {
            confirmPassword: {
              label: "මුරපදය තහවුරු කරන්න",
              placeholder: "නව මුරපදය ඇතුළත් කරන්න",
              validations: {
                empty: "මුරපදය තහවුරු කිරීම අත්‍යවශ්‍ය ක්ෂේත්‍රයකි",
                mismatch: "මුරපද තහවුරු කිරීම නොගැලපේ"
              }
            },
            currentPassword: {
              label: "වත්මන් මුරපදය",
              placeholder: "වත්මන් මුරපදය ඇතුළත් කරන්න",
              validations: {
                empty: "වත්මන් මුරපදය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි",
                invalid: "වත්මන් මුරපදය අවලංගුය"
              }
            },
            newPassword: {
              label: "නව මුරපදය",
              placeholder: "නව මුරපදය ඇතුළත් කරන්න",
              validations: {
                empty: "නව මුරපදය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි"
              }
            }
          },
          validations: {
            genericError: {
              description: "දෝෂයක් ඇතිවිය!! කරුණාකර නැවත උත්සාහ කරන්න",
              message: "මුරපද වෙනස් කිරීමේ දෝෂයකි"
            },
            invalidCurrentPassword: {
              description: "ඔබ ඇතුලත් කළ මුරපදය අවලංගු බව පෙනේ. කරුණාකර නැවත උත්සාහ කරන්න",
              message: "මුරපද වෙනස් කිරීමේ දෝෂයකිි"
            },
            submitError: {
              description: "{{description}}",
              message: "මුරපද වෙනස් කිරීමේ දෝෂයකි"
            },
            submitSuccess: {
              description: "මුරපදය සාර්ථකව වෙනස් කර ඇත",
              message: "මුරපද යළි පිහිටුවීම සාර්ථකයි"
            }
          }
        }
      },
      modals: {
        confirmationModal: {
          heading: "තහවුරු කිරීම",
          message: "Changing the password will result in the termination of the current session. You will " + "have to login with the newly changed password. Do you wish to continue?"
        }
      }
    },
    consentManagement: {
      editConsent: {
        collectionMethod: "ගොනුකිරීමේ ක්‍රමය",
        dangerZones: {
          revoke: {
            actionTitle: "අවලංගු කරන්න",
            header: "කැමැත්ත අවලංගු කරන්න",
            subheader: "ඔබට මෙම ඇප් එක සඳහා නැවත කැමැත්ත ලබා දීමට සිදුවේ."
          }
        },
        description: "සටහන",
        piiCategoryHeading: "Manage consent for the collection and sharing of your personal information " + "with the application. Uncheck the attributes that you need to revoke and press the update " + "button to save the changes or press the revoke button to remove the consent for all the " + "attributes.",
        state: "තත්වය",
        version: "පිටපත"
      },
      modals: {
        consentRevokeModal: {
          heading: "ඔබට විශ්වාසද?",
          message: "This operation is not reversible. This will permanently revoke consent for all the " + "attributes. Are you sure you want to proceed?",
          warning: "ඔබ පිවිසුම් කැමැත්ත පිටුවට හරවා යවන බව කරුණාවෙන් සලකන්න"
        }
      },
      notifications: {
        consentReceiptFetch: {
          error: {
            description: "{{description}}",
            message: "දෝෂයක් ඇතිවිය!!!"
          },
          genericError: {
            description: "තෝරාගත් යෙදුමේ තොරතුරු පූරණය කළ නොහැක",
            message: "දෝෂයක් ඇතිවිය!!!"
          },
          success: {
            description: "අනුමත රිසිට්පත සාර්ථකව ලබා ගන්නා ලදි",
            message: "නැවත ලබා ගැනීම සාර්ථකයි"
          }
        },
        consentedAppsFetch: {
          error: {
            description: "{{description}}",
            message: "දෝෂයක් ඇතිවිය!!!"
          },
          genericError: {
            description: "අනුමත යෙදුම් ලැයිස්තුව පූරණය කළ නොහැක",
            message: "දෝෂයක් ඇතිවිය!!!"
          },
          success: {
            description: "අනුමත යෙදුම් ලැයිස්තුව සාර්ථකව ලබා ගන්නා ලදි",
            message: "නැවත ලබා ගැනීම සාර්ථකයි"
          }
        },
        revokeConsentedApp: {
          error: {
            description: "{{description}}",
            message: "අනුමැතිය අවලංගු කිරීමේ දෝෂයකි"
          },
          genericError: {
            description: "යෙදුම සඳහාවූ අනුමැතිය අවලංගු කිරීමට නොහැකි විය.",
            message: "දෝෂයක් ඇතිවිය!!!"
          },
          success: {
            description: "යෙදුම සඳහාවූ අනුමැතිය සාර්ථකව අවලංගු කර ඇත",
            message: "අනුමැතිය අවලංගු කිරීම සාර්ථකය"
          }
        },
        updateConsentedClaims: {
          error: {
            description: "{{description}}",
            message: "දෝෂයක් ඇතිවිය!!!"
          },
          genericError: {
            description: "යෙදුම සඳහා එකඟ වූ හිමිකම් යාවත්කාලීන කිරීමට අසමත් විය",
            message: "දෝෂයක් ඇතිවිය!!!"
          },
          success: {
            description: "යෙදුම සඳහා එකඟ වූ හිමිකම් සාර්ථකව යාවත්කාලීන කර ඇත",
            message: "අනුමත හිමිකම් සාර්ථකව යාවත්කාලීන කරන ලදි"
          }
        }
      }
    },
    federatedAssociations: {
      deleteConfirmation: "This will remove this external login from your account. Do you want to continue " + "removing?",
      notifications: {
        getFederatedAssociations: {
          error: {
            description: "{{description}}",
            message: "දෝෂයක් ඇතිවිය!!!"
          },
          genericError: {
            description: "බාහිර පිවිසුම් ලබා ගැනීමට නොහැකි විය",
            message: "දෝෂයක් ඇතිවිය!!!"
          },
          success: {
            description: "බාහිර පිවිසුම් සාර්ථකව ලබාගෙන ඇත",
            message: "බාහිර පිවිසුම් සාර්ථකව ලබා ගන්නා ලදි"
          }
        },
        removeAllFederatedAssociations: {
          error: {
            description: "{{description}}",
            message: "දෝෂයක් ඇතිවිය!!!"
          },
          genericError: {
            description: "බාහිර පිවිසුම් ඉවත් කළ නොහැක",
            message: "දෝෂයක් ඇතිවිය!!!"
          },
          success: {
            description: "සියලුම බාහිර පිවිසුම් සාර්ථකව ඉවත් කර ඇත",
            message: "බාහිර පිවිසුම් සාර්ථකව ඉවත් කරන ලදි"
          }
        },
        removeFederatedAssociation: {
          error: {
            description: "{{description}}",
            message: "දෝෂයක් ඇතිවිය!!!"
          },
          genericError: {
            description: "බාහිර පිවිසුම ඉවත් කළ නොහැක",
            message: "දෝෂයක් ඇතිවිය!!!"
          },
          success: {
            description: "බාහිර පිවිසුම සාර්ථකව ඉවත් කර ඇත",
            message: "බාහිර පිවිසුම සාර්ථකව ඉවත් කරන ලදි"
          }
        }
      }
    },
    footer: {
      copyright: "WSO2 Identity Server © {{year}}"
    },
    linkedAccounts: {
      accountTypes: {
        local: {
          label: "ස්ථානික පරිශීලක ගිණුම එක් කරන්න"
        }
      },
      deleteConfirmation: "This will remove the linked account from your account. Do you want to continue " + "removing?",
      forms: {
        addAccountForm: {
          inputs: {
            password: {
              label: "මුරපදය",
              placeholder: "මුරපදය ඇතුළත් කරන්න",
              validations: {
                empty: "මුරපදය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි"
              }
            },
            username: {
              label: "පරිශීලක නාමය",
              placeholder: "පරිශීලක නාමය ඇතුළත් කරන්න",
              validations: {
                empty: "ඇතුළත් කරන්න අත්‍යවශ්‍ය ක්ෂේත්‍රයකි"
              }
            }
          }
        }
      },
      notifications: {
        addAssociation: {
          error: {
            description: "{{description}}",
            message: "සම්බන්ධිත පරිශීලක ගිණුම් ලබා ගැනීමේ දෝෂයකි"
          },
          genericError: {
            description: "සම්බන්ධිත ගිණුම එකතු කිරීමේදී දෝෂයක් ඇතිවිය",
            message: "දෝෂයක් ඇතිවිය!!!"
          },
          success: {
            description: "අවශ්‍ය සම්බන්ධිත පරිශීලක ගිණුම සාර්ථකව එකතු කරන ලදි",
            message: "සම්බන්ධිත පරිශීලක ගිණුම සාර්ථකව එක් කරන ලදි"
          }
        },
        getAssociations: {
          error: {
            description: "{{description}}",
            message: "සම්බන්ධිත පරිශීලක ගිණුම් ලබා ගැනීමේ දෝෂයකි"
          },
          genericError: {
            description: "සම්බන්ධිත පරිශීලක ගිණුම් ලබා ගැනීමේදී දෝෂයක් ඇතිවිය",
            message: "දෝෂයක් ඇතිවිය!!!"
          },
          success: {
            description: "අවශ්‍ය පරිශීලක පැතිකඩ විස්තර සාර්ථකව ලබා ගන්නා ලදි",
            message: "සම්බන්ධිත පරිශීලක ගිණුම් සාර්ථකව ලබා ගන්නා ලදි"
          }
        },
        removeAllAssociations: {
          error: {
            description: "{{description}}",
            message: "සම්බන්ධිත පරිශීලක ගිණුම් ඉවත් කිරීමේ දෝෂයකිs"
          },
          genericError: {
            description: "සම්බන්ධිත පරිශීලක ගිණුම් ඉවත් කිරීමේදී දෝෂයක් ඇතිවිය",
            message: "දෝෂයක් ඇතිවිය"
          },
          success: {
            description: "සම්බන්ධිත සියලුම පරිශීලක ගිණුම් ඉවත් කර ඇත",
            message: "සම්බන්ධිත ගිණුම් සාර්ථකව ඉවත් කරන ලදි"
          }
        },
        removeAssociation: {
          error: {
            description: "{{description}}",
            message: "සම්බන්ධිත පරිශීලක ගිණුම ඉවත් කිරීමේ දෝෂයකි"
          },
          genericError: {
            description: "සම්බන්ධිත පරිශීලක ගිණුම ඉවත් කිරීමේදී දෝෂයක් ඇතිවිය",
            message: "දෝෂයක් ඇතිවිය"
          },
          success: {
            description: "සම්බන්ධිත පරිශීලක ගිණුම් ඉවත් කර ඇත",
            message: "සම්බන්ධිත ගිණුම සාර්ථකව ඉවත් කරන ලදි"
          }
        },
        switchAccount: {
          error: {
            description: "{{description}}",
            message: "ගිණුම මාරු කිරීමේදී දෝෂයක් ඇතිවිය"
          },
          genericError: {
            description: "ගිණුම මාරු කිරීමේදී දෝෂයක් ඇතිවිය",
            message: "දෝෂයක් ඇතිවිය"
          },
          success: {
            description: "ගිණුම සාර්ථකව මාරු කර ඇත",
            message: "ගිණුම සාර්ථකව මාරු විය"
          }
        }
      }
    },
    mfa: {
      authenticatorApp: {
        description: "Scan the QR code using an Authenticator App to use TOTP" + " as a second " + "authentication factor",
        heading: "සත්‍යාපන යෙදුම",
        hint: "QR කේතය පෙන්වන්න",
        modals: {
          done: "සාර්ථකත්වය! දැන් ඔබට සාධක දෙකක සත්‍යාපනය සඳහා ඔබේ සත්‍යාපන යෙදුම භාවිතා කළ හැකිය",
          scan: {
            authenticatorApps: "සත්‍යාපන යෙදුම්",
            generate: "නව කේතයක් ජනනය කරන්න",
            heading: "සත්‍යාපන යෙදුමක් භාවිතයෙන් මෙම QR කේතය පරිලෝකනය කරන්න",
            messageBody: "ඔබට මෙහි ඇති සත්‍යාපන යෙදුම් ලැයිස්තුවක් සොයාගත හැකිය.",
            messageHeading: "සත්‍යාපන යෙදුමක් ස්ථාපනය කර නොමැතිද?"
          },
          verify: {
            error: "සත්‍යාපනය අසාර්ථක විය. කරුණාකර නැවත උත්සාහ කරන්න.",
            heading: "සත්‍යාපන යෙදුමෙන් සත්‍යාපන කේතය ඇතුළත් කරන්න",
            label: "සත්යාපන කේතය",
            placeholder: "ඔබගේ සත්‍යාපන කේතය ඇතුළත් කරන්න",
            reScan: "නැවත පරිලෝකනය කරන්න",
            reScanQuestion: "QR කේතය නැවත පරිලෝකනය කිරීමට අවශ්‍යද?",
            requiredError: "සත්‍යාපන කේතය ඇතුළත් කරන්න"
          }
        },
        notifications: {
          initError: {
            error: {
              description: "{{error}}",
              message: "මොකක්හරි වැරැද්දක් වෙලා"
            },
            genericError: {
              description: "QR කේතය ලබා ගැනීමේදී දෝෂයක් ඇතිවිය",
              message: "මොකක්හරි වැරැද්දක් වෙලා"
            }
          },
          refreshError: {
            error: {
              description: "{{error}}",
              message: "මොකක්හරි වැරැද්දක් වෙලා"
            },
            genericError: {
              description: "නව QR කේතයක් ලබා ගැනීමට උත්සාහ කිරීමේදී දෝෂයකි",
              message: "මොකක්හරි වැරැද්දක් වෙලා"
            }
          }
        }
      },
      fido: {
        description: "FIDO යතුරක් සම්බන්ධ කිරීමෙන් සත්‍යාපනය කිරීම",
        form: {
          label: "ආරක්ෂක උපාංගය",
          placeholder: "උපාංග නාමයක් ඇතුළත් කරන්න",
          remove: "උපාංගය ඉවත් කරන්න",
          required: "කරුණාකර ඔබගේ ආරක්ෂක උපාංගයේ නම ඇතුළත් කරන්න"
        },
        heading: "FIDO",
        modals: {
          deviceRegistrationErrorModal: {
            description: "The device registration was interrupted. If this was not intentional you " + "may retry the same flow or try again with an older security key.",
            heading: "උපාංග ලියාපදිංචි කිරීම අසාර්ථක විය"
          }
        },
        notifications: {
          removeDevice: {
            error: {
              description: "{{description}}",
              message: "උපාංගය ඉවත් කිරීමේදී දෝෂයක් ඇතිවිය"
            },
            genericError: {
              description: "උපාංගය ඉවත් කිරීමේදී දෝෂයක් ඇතිවිය",
              message: "දෝෂයක් ඇතිවිය!!!"
            },
            success: {
              description: "උපාංගය ලැයිස්තුවෙන් සාර්ථකව ඉවත් කරන ලදි",
              message: "ඔබගේ උපාංගය සාර්ථකව ඉවත් කරන ලදි"
            }
          },
          startFidoFlow: {
            error: {
              description: "{{description}}",
              message: "උපාංගය ලියාපදිංචි කිරීමේදී දෝෂයක් ඇතිවිය"
            },
            genericError: {
              description: "උපාංගය ලියාපදිංචි කිරීමේදී දෝෂයක් ඇතිවිය",
              message: "දෝෂයක් ඇතිවිය!!!"
            },
            success: {
              description: "The device was successfully registered and now you can use it as an " + "authentication factor",
              message: "ඔබගේ උපාංගය සාර්ථකව ලියාපදිංචි කර ඇත"
            }
          },
          updateDeviceName: {
            error: {
              description: "{{description}}",
              message: "ආරක්ෂක උපාංගයේ නම යාවත්කාලීන කිරීමේදී දෝෂයක් ඇතිවිය"
            },
            genericError: {
              description: "ආරක්ෂක උපාංගයේ නම යාවත්කාලීන කිරීමේදී දෝෂයක් ඇතිවිය",
              message: "දෝෂයක් ඇතිවිය!!!"
            },
            success: {
              description: "ඔබගේ ආරක්ෂක උපාංගයේ නම සාර්ථකව යාවත්කාලීන කරන ලදි",
              message: "ආරක්ෂක උපාංගයේ නම සාර්ථකව යාවත්කාලීන කරන ලදි"
            }
          }
        },
        tryButton: "පැරණි උපාංගයක් සමඟ උත්සාහ කරන්න"
      },
      smsOtp: {
        descriptions: {
          hint: "සත්‍යාපන කේතය අඩංගු කෙටි පණිවිඩයක් ඔබට ලැබෙනු ඇත"
        },
        heading: "කෙටි පණිවුඩ OTP",
        notifications: {
          updateMobile: {
            error: {
              description: "{{description}}",
              message: "ජංගම දුරකථන අංකය යාවත්කාලීන කිරීමේදී දෝෂයක් ඇතිවිය"
            },
            genericError: {
              description: "ජංගම දුරකථන අංකය යාවත්කාලීන කිරීමේදී දෝෂයක් ඇතිවිය",
              message: "දෝෂයක් ඇතිවිය!!!"
            },
            success: {
              description: "පරිශීලක පැතිකඩෙහි ඇති ජංගම දුරකථන අංකය සාර්ථකව යාවත්කාලීන වේ",
              message: "ජංගම දුරකථන අංකය සාර්ථකව යාවත්කාලීන කරන ලදි"
            }
          }
        }
      }
    },
    overview: {
      widgets: {
        accountActivity: {
          actionTitles: {
            update: "ගිණුම් ක්‍රියාකාරකම් කළමනාකරණය කරන්න"
          },
          description: "ඔබ දැනට පහත උපාංගයෙන් පුරනය වී ඇත",
          header: "ගිණුම් ක්‍රියාකාරකම්"
        },
        accountSecurity: {
          actionTitles: {
            update: "ගිණුම් ආරක්ෂාව යාවත්කාලීන කරන්න"
          },
          description: "ඔබගේ ගිණුම ආරක්ෂිතව තබා ගැනීමට ඔබට උදව් කිරීමට සැකසීම් සහ නිර්දේශ",
          header: "ගිණුම් ආරක්ෂාව"
        },
        accountStatus: {
          complete: "ඔබගේ ගිණුම සම්පූර්ණයි",
          completedFields: "සම්පුර්ණ කළ ක්ෂේත්‍ර",
          completionPercentage: "ඔබගේ ගිණුම සම්පුර්ණ කිරීමේ ප්‍රතිශතය {{percentage}}%",
          inComplete: "ඔබගේ ගිණුම සම්පූර්ණ කරන්න",
          inCompleteFields: "අසම්පූර්ණ ක්ෂේත්‍ර",
          mandatoryFieldsCompletion: "අනිවාර්ය ක්ෂේත්‍රයන් {{total}} ගෙන් {{completed}} සම්පූර්ණ කර ඇත",
          optionalFieldsCompletion: "විකල්ප ක්ෂේත්‍රයන් {{total}} ගෙන් {{completed}} සම්පූර්ණ කර ඇත"
        },
        consentManagement: {
          actionTitles: {
            manage: "අනුමැතිය පාලනය කිරීම"
          },
          description: "ඔබට යෙදුම් සදහා සැපයීමට අවශ්‍ය දත්ත පාලනය කිරීම",
          header: "අනුමැතිය කළමනාකරණය කිරීම"
        }
      }
    },
    privacy: {
      about: {
        description: "WSO2 Identity Server (referred to as “WSO2 IS” within this policy) is an open source " + "Identity Management and Entitlement Server that is based on open standards and specifications.",
        heading: "WSO2 හැඳුනුම් සේවය පිලිබදව"
      },
      privacyPolicy: {
        collectionOfPersonalInfo: {
          description: {
            list1: {
              0: "WSO2 IS uses your IP address to detect any suspicious login attempts to your account.",
              1: "WSO2 IS uses attributes like your first name, last name, etc., to provide a rich and" + " personalized user experience.",
              2: "WSO2 IS uses your security questions and answers only to allow account recovery."
            },
            para1: "WSO2 IS collects your information only to serve your access requirements. For example:"
          },
          heading: "පුද්ගලික තොරතුරු එකතු කිරීම",
          trackingTechnologies: {
            description: {
              list1: {
                0: "Collecting information from the user profile page where you enter your personal" + " data.",
                1: "Tracking your IP address with HTTP request, HTTP headers, and TCP/IP.",
                2: "Tracking your geographic information with the IP address.",
                3: "Tracking your login history with browser cookies. Please see our" + " {{cookiePolicyLink}} for more information."
              },
              para1: "WSO2 IS විසින් ඔබේ තොරතුරු රැස් කරන්නේ:"
            },
            heading: "ලුහුබැඳීමේ තාක්ෂණයන්"
          }
        },
        description: {
          para1: "This policy describes how WSO2 IS captures your personal information, the purposes of" + " collection, and information about the retention of your personal information.",
          para2: "Please note that this policy is for reference only, and is applicable for the software " + "as a product. WSO2 Inc. and its developers have no access to the information held within " + "WSO2 IS. Please see the <1>disclaimer</1> section for more information.",
          para3: "Entities, organizations or individuals controlling the use and administration of WSO2 IS " + "should create their own privacy policies setting out the manner in which data is controlled " + "or processed by the respective entity, organization or individual."
        },
        disclaimer: {
          description: {
            list1: {
              0: "WSO2, its employees, partners, and affiliates do not have access to and do not " + "require, store, process or control any of the data, including personal data " + "contained in WSO2 IS. All data, including personal data is controlled and " + "processed by the entity or individual running WSO2 IS. WSO2, its employees partners " + "and affiliates are not a data processor or a data controller within the meaning of " + "any data privacy regulations. WSO2 does not provide any warranties or undertake any " + "responsibility or liability in connection with the lawfulness or the manner and " + "purposes for which WSO2 IS is used by such entities or persons.",
              1: "This privacy policy is for the informational purposes of the entity or persons " + "running WSO2 IS and sets out the processes and functionality contained within " + "WSO2 IS regarding personal data protection. It is the responsibility of entities " + "and persons running WSO2 IS to create and administer its own rules and processes " + "governing users' personal data, and such rules and processes may change the use, " + "storage and disclosure policies contained herein. Therefore users should consult " + "the entity or persons running WSO2 IS for its own privacy policy for details " + "governing users' personal data."
            }
          },
          heading: "වියාචනය"
        },
        disclosureOfPersonalInfo: {
          description: "WSO2 IS only discloses personal information to the relevant applications (also " + "known as Service Provider) that are registered with WSO2 IS. These applications are " + "registered by the identity administrator of your entity or organization. Personal " + "information is disclosed only for the purposes for which it was collected (or for a " + "use identified as consistent with that purpose), as controlled by such Service Providers, " + "unless you have consented otherwise or where it is required by law.",
          heading: "පුද්ගලික තොරතුරු අනාවරණය කිරීම",
          legalProcess: {
            description: "Please note that the organization, entity or individual running WSO2 IS may " + "be compelled to disclose your personal information with or without your consent when " + "it is required by law following due and lawful process.",
            heading: "නීති ක්‍රියාවලිය"
          }
        },
        heading: "රහස්‍යතා ප්‍රතිපත්තිය",
        moreInfo: {
          changesToPolicy: {
            description: {
              para1: "Upgraded versions of WSO2 IS may contain changes to this policy and " + "revisions to this policy will be packaged within such upgrades. Such changes " + "would only apply to users who choose to use upgraded versions.",
              para2: "The organization running WSO2 IS may revise the Privacy Policy from time to " + "time. You can find the most recent governing policy with the respective link " + "provided by the organization running WSO2 IS. The organization will notify " + "any changes to the privacy policy over our official public channels."
            },
            heading: "මෙම ප්‍රතිපත්තියේ වෙනස්කම්"
          },
          contactUs: {
            description: {
              para1: "Please contact WSO2 if you have any question or concerns regarding this privacy " + "policy."
            },
            heading: "අප අමතන්න"
          },
          heading: "වැඩි විස්තර",
          yourChoices: {
            description: {
              para1: "If you are already have a user account within WSO2 IS, you have the right to " + "deactivate your account if you find that this privacy policy is unacceptable to you.",
              para2: "If you do not have an account and you do not agree with our privacy policy, " + "you can choose not to create one."
            },
            heading: "ඔබේ තේරීම්"
          }
        },
        storageOfPersonalInfo: {
          heading: "පුද්ගලික තොරතුරු ගබඩා කිරීම",
          howLong: {
            description: {
              list1: {
                0: "Current password",
                1: "Previously used passwords"
              },
              para1: "WSO2 IS retains your personal data as long as you are an active user of our " + "system. You can update your personal data at any time using the given self-care " + "user portals.",
              para2: "WSO2 IS may keep hashed secrets to provide you with an added level of security. " + "This includes:"
            },
            heading: "ඔබේ පුද්ගලික තොරතුරු කොපමණ කාලයක් රඳවා තබා ගනීද?"
          },
          requestRemoval: {
            description: {
              para1: "You can request the administrator to delete your account. The administrator is " + "the administrator of the tenant you are registered under, or the " + "super-administrator if you do not use the tenant feature.",
              para2: "Additionally, you can request to anonymize all traces of your activities " + "that WSO2 IS may have retained in logs, databases or analytical storage."
            },
            heading: "ඔබගේ පුද්ගලික තොරතුරු ඉවත් කිරීමට ඉල්ලන්නේ කෙසේද?"
          },
          where: {
            description: {
              para1: "WSO2 IS stores your personal information in secured databases. WSO2 IS " + "exercises proper industry accepted security measures to protect the database " + "where your personal information is held. WSO2 IS as a product does not transfer " + "or share your data with any third parties or locations.",
              para2: "WSO2 IS may use encryption to keep your personal data with an added level " + "of security."
            },
            heading: "ඔබේ පුද්ගලික තොරතුරු ගබඩා කර ඇත්තේ කොහේද?"
          }
        },
        useOfPersonalInfo: {
          description: {
            list1: {
              0: "To provide you with a personalized user experience. WSO2 IS uses your name and " + "uploaded profile pictures for this purpose.",
              1: "To protect your account from unauthorized access or potential hacking attempts. " + "WSO2 IS uses HTTP or TCP/IP Headers for this purpose.",
              2: "Derive statistical data for analytical purposes on system performance improvements. " + "WSO2 IS will not keep any personal information after statistical calculations. " + "Therefore, the statistical report has no means of identifying an individual person."
            },
            para1: "WSO2 IS will only use your personal information for the purposes for which it was " + "collected (or for a use identified as consistent with that purpose).",
            para2: "WSO2 IS ඔබේ පුද්ගලික තොරතුරු භාවිතා කරන්නේ පහත සඳහන් අරමුණු සඳහා පමණි.",
            subList1: {
              heading: "මෙයට ඇතුළත් වන්නේ:",
              list: {
                0: "IP address",
                1: "Browser fingerprinting",
                2: "Cookies"
              }
            },
            subList2: {
              heading: "WSO2 IS භාවිතා කළ හැකිය:",
              list: {
                0: "IP Address to derive geographic information",
                1: "Browser fingerprinting to determine the browser technology or/and version"
              }
            }
          },
          heading: "පුද්ගලික තොරතුරු භාවිතය"
        },
        whatIsPersonalInfo: {
          description: {
            list1: {
              0: "Your user name (except in cases where the user name created by your employer is " + "under contract)",
              1: "Your date of birth/age",
              2: "IP address used to log in",
              3: "Your device ID if you use a device (e.g., phone or tablet) to log in"
            },
            list2: {
              0: "City/Country from which you originated the TCP/IP connection",
              1: "Time of the day that you logged in (year, month, week, hour or minute)",
              2: "Type of device that you used to log in (e.g., phone or tablet)",
              3: "Operating system and generic browser information"
            },
            para1: "WSO2 IS considers anything related to you, and by which you may be identified, as " + "your personal information. This includes, but is not limited to:",
            para2: "However, WSO2 IS also collects the following information that is not considered " + "personal information, but is used only for <1>statistical</1> purposes. The reason " + "for this is that this information can not be used to track you."
          },
          heading: "පුද්ගලික තොරතුරු යනු කුමක්ද?"
        }
      }
    },
    profile: {
      fields: {
        addressesHome: "නිවසේ ලිපිනය",
        addressesWork: "වැඩ ලිපිනය",
        emails: "විද්යුත් තැපෑල",
        emailsHome: "නිවසේ විද්‍යුත් තැපෑල",
        emailsOther: "වෙනත් විද්‍යුත් තැපෑල",
        emailsWork: "වැඩ ඊමේල්",
        generic: {
          default: "එකතු කරන්න {{fieldName}}"
        },
        nameFamilyName: "අවසන් නම",
        nameGivenName: "මුල් නම",
        phoneNumbers: "දුරකතන අංකය",
        phoneNumbersHome: "නිවසේ දුරකථන අංකය",
        phoneNumbersMobile: "ජංගම දූරකථන අංකය",
        phoneNumbersOther: "වෙනත් දුරකථන අංකය",
        phoneNumbersWork: "රැකියා දුරකථන අංකය",
        profileImage: "පැතිකඩ රූපය",
        profileUrl: "URL",
        userName: "පරිශීලක නාමය"
      },
      forms: {
        emailChangeForm: {
          inputs: {
            email: {
              label: "විද්‍යුත් තැපෑල",
              note: "සටහන: මෙය ඔබගේ පැතිකඩෙහි විද්‍යුත් තැපැල් ලිපිනය වෙනස් කරයි",
              placeholder: "විද්‍යුත් තැපෑල ඇතුල් කරන්න",
              validations: {
                empty: "විද්‍යුත් තැපෑල අත්‍යවශ්‍ය ක්ෂේත්‍රයකි",
                invalidFormat: "ඊමේල් ලිපිනය නිවැරදි ආකෘතියෙන් නොවේ"
              }
            }
          }
        },
        generic: {
          inputs: {
            placeholder: "{{fieldName}} ඇතුල් කරන්න",
            validations: {
              empty: "{{fieldName}} අත්‍යවශ්‍ය ක්ෂේත්‍රයකි",
              invalidFormat: "{{fieldName}} නිවැරදි ආකෘතියෙන් නොවේ"
            }
          }
        },
        mobileChangeForm: {
          inputs: {
            mobile: {
              label: "ජංගම දුරකථන අංකය",
              note: "සටහන: මෙය ඔබගේ පැතිකඩෙහි ඇති ජංගම දුරකථන අංකය වෙනස් කරනු ඇත",
              placeholder: "ජංගම දුරකථන අංකය ඇතුල් කරන්න",
              validations: {
                empty: "ජංගම දුරකථන අංකය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි",
                invalidFormat: "ජංගම දුරකථන අංකය නිවැරදි ආකෘතියෙන් නොවේ"
              }
            }
          }
        },
        nameChangeForm: {
          inputs: {
            firstName: {
              label: "මුල් නම",
              placeholder: "මුල් නම ඇතුල් කරන්න",
              validations: {
                empty: "මුල් නම අත්‍යවශ්‍ය ක්ෂේත්‍රයකි"
              }
            },
            lastName: {
              label: "අන්තිම නම",
              placeholder: "අන්තිම නම ඇතුල් කරන්න",
              validations: {
                empty: "අන්තිම නම අත්‍යවශ්‍ය ක්ෂේත්‍රයකි"
              }
            }
          }
        },
        organizationChangeForm: {
          inputs: {
            organization: {
              label: "සංවිධානය",
              placeholder: "සංවිධානය ඇතුල් කරන්න",
              validations: {
                empty: "සංවිධානය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි"
              }
            }
          }
        }
      },
      messages: {
        emailConfirmation: {
          content: "ඔබගේ පැතිකඩට නව විද්‍යුත් තැපෑල එක් කිරීම සඳහා කරුණාකර විද්‍යුත් තැපැල් ලිපින යාවත්කාලීන කිරීම තහවුරු කරන්න.",
          header: "තහවුරු කිරීම අපේක්ෂිතයි!"
        }
      },
      notifications: {
        getProfileInfo: {
          error: {
            description: "{{description}}",
            message: "පැතිකඩ විස්තර ලබා ගැනීමේදී දෝෂයක් ඇතිවිය"
          },
          genericError: {
            description: "පැතිකඩ විස්තර ලබා ගැනීමේදී දෝෂයක් ඇතිවිය",
            message: "දෝෂයක් ඇතිවිය!!!"
          },
          success: {
            description: "අවශ්‍ය පරිශීලක පැතිකඩ විස්තර සාර්ථකව ලබා ගන්න ලදී",
            message: "පරිශීලක පැතිකඩ සාර්ථකව ලබා ගන්නා ලදි"
          }
        },
        getUserReadOnlyStatus: {
          genericError: {
            description: "පරිශීලකයාගේ කියවීමට පමණක් තත්ත්වය ලබා ගැනීමේදී දෝෂයක් ඇතිවිය",
            message: "දෝෂයක් ඇතිවිය!!!"
          }
        },
        updateProfileInfo: {
          error: {
            description: "{{description}}",
            message: "පැතිකඩ විස්තර යාවත්කාලීන කිරීමේදී දෝෂයක් ඇතිවිය"
          },
          genericError: {
            description: "පැතිකඩ විස්තර යාවත්කාලීන කිරීමේදී දෝෂයක් ඇතිවිය",
            message: "දෝෂයක් ඇතිවිය!!!"
          },
          success: {
            description: "අවශ්‍ය පරිශීලක පැතිකඩ විස්තර සාර්ථකව යාවත්කාලීන කරන ලදි",
            message: "පරිශීලක පැතිකඩ සාර්ථකව යාවත්කාලීන කරන ලදි"
          }
        }
      },
      placeholders: {
        SCIMDisabled: {
          heading: "මෙම අංගය ඔබගේ ගිණුමට ලබා ගත නොහැක"
        }
      }
    },
    profileExport: {
      notifications: {
        downloadProfileInfo: {
          error: {
            description: "{{description}}",
            message: "Eපරිශීලක පැතිකඩ විස්තර බාගත කිරීමේදී දෝෂයක් ඇතිවිය"
          },
          genericError: {
            description: "පරිශීලක පැතිකඩ විස්තර බාගත කිරීමේදී දෝෂයක් ඇතිවිය",
            message: "දෝෂයක් ඇතිවිය!!!"
          },
          success: {
            description: "අවශ්‍ය පරිශීලක පැතිකඩ විස්තර අඩංගු ගොනුව බාගත කිරීම ආරම්භ කර ඇත.",
            message: "පරිශීලක පැතිකඩ විස්තර බාගත කිරීම ආරම්භ විය"
          }
        }
      }
    },
    userAvatar: {
      infoPopover: "මෙම පින්තූරය <1>Gravatar</1> සේවාවෙන් ලබාගෙන ඇත.",
      urlUpdateHeader: "ඔබගේ පැතිකඩ පින්තූරය සැකසීමට රූප URL එකක් ඇතුළත් කරන්න"
    },
    userSessions: {
      browserAndOS: "{{os}} {{version}} මත {{browser}}",
      dangerZones: {
        terminate: {
          actionTitle: "අවසන් කරන්න",
          header: "සැසිය අවසන් කරන්න",
          subheader: "විශේෂිත උපාංගයේ සැසියෙන් ඔබ ඉවත් වනු ඇත."
        }
      },
      lastAccessed: "අවසන් ප්‍රවේශය {{date}}",
      modals: {
        terminateAllUserSessionsModal: {
          heading: "තහවුරු කිරීම",
          message: "This action will log you out of all the sessions on every device. Do you wish to " + "continue?"
        },
        terminateUserSessionModal: {
          heading: "තහවුරු කිරීම",
          message: "This action will log you out of the session on the particular device. Do you wish to " + "continue?"
        }
      },
      notifications: {
        fetchSessions: {
          error: {
            description: "{{description}}",
            message: "IDP සැසිය ලබා ගැනීමේ දෝෂයකි"
          },
          genericError: {
            description: "කිසිදු IDP සැසියක් ලබා ගැනීමට නොහැකි විය",
            message: "දෝෂයක් ඇතිවිය"
          },
          success: {
            description: "IDP සැසි සාර්ථකව ලබා ගන්නා ලදි",
            message: "IDP සැසිය නැවත ලබා ගැනීම සාර්ථකයි"
          }
        },
        terminateAllUserSessions: {
          error: {
            description: "{{description}}",
            message: "IDP සැසි අවසන් කිරීමට නොහැකි විය"
          },
          genericError: {
            description: "IDP සැසි අවසන් කිරීමේදී දෝෂයක් ඇතිවී ඇත.",
            message: "IDP සැසි අවසන් කිරීමට නොහැකි විය"
          },
          success: {
            description: "සියලුම IDP සැසි සාර්ථකව අවසන් කරන ලදි",
            message: "සියලුම IDP සැසි අවසන් කරන ලදි"
          }
        },
        terminateUserSession: {
          error: {
            description: "{{description}}",
            message: "IDP සැසිය අවසන් කිරීමට නොහැකි විය"
          },
          genericError: {
            description: "IDP සැසි අවසන් කිරීමේදී දෝෂයක් ඇතිවී ඇත.",
            message: "IDP සැසිය අවසන් කිරීමට නොහැකි විය"
          },
          success: {
            description: "IDP සැසිය සාර්ථකව අවසන් කරන ලදි",
            message: "සාර්ථකයි"
          }
        }
      }
    }
  },
  modals: {
    editAvatarModal: {
      content: {
        gravatar: {
          errors: {
            noAssociation: {
              content: "It seems like the selected email is not registered on Gravatar. " + "Sign up for a Gravatar account by visiting Gravatar official website or use " + "one of the following.",
              header: "ගැලපෙන Gravatar රූපයක් හමු නොවීය!"
            }
          },
          heading: "Gravatar මත පදනම්ව "
        },
        hostedAvatar: {
          heading: "සත්කාරක රූපය",
          input: {
            errors: {
              http: {
                content: "The selected URL points to an insecure image served over HTTP. " + "Please proceed with caution.",
                header: "අනාරක්ෂිත අන්තර්ගතය!"
              },
              invalid: {
                content: "කරුණාකර වලංගු Image URL එකක් ඇතුළත් කරන්න"
              }
            },
            hint: "තෙවන පාර්ශවීය ස්ථානයක සත්කාරක වන වලංගු රූප URL එකක් ඇතුළත් කරන්න.",
            placeholder: "රූපය සඳහා URL ඇතුලත් කරන්න.",
            warnings: {
              dataURL: {
                content: "Using Data URLs with large character count might result in database " + "issues. Proceed with caution.",
                header: "ඇතුළත් කළ දත්ත URL එක දෙවරක් පරීක්ෂා කරන්න!"
              }
            }
          }
        },
        systemGenAvatars: {
          heading: "පද්ධතිය ජනනය කළ අවතාරය",
          types: {
            initials: "මුලකුරු"
          }
        }
      },
      description: null,
      heading: "පැතිකඩ පින්තූරය යාවත්කාලීන කරන්න",
      primaryButton: "සුරකින්න",
      secondaryButton: "අවලංගු කරන්න"
    },
    sessionTimeoutModal: {
      description: "You will be logged out of the current session due to inactivity." + "Please choose Stay logged in if you would like to continue the session.",
      heading: "තත්පර <1>{{ time }}</1> කින් ඔබ ඉවත් වනු ඇත.",
      primaryButton: "පුරනය වී සිටින්න",
      secondaryButton: "වරන්න"
    }
  },
  pages: {
    applications: {
      subTitle: "Manage and maintain your applications",
      title: "Applications"
    },
    operations: {
      subTitle: "Review operational tasks that requires your approval",
      title: "මෙහෙයුම්"
    },
    overview: {
      subTitle: "ඔබගේ තොරතුරු, ආරක්ෂාව, පෞද්ගලිකත්වය සහ අදාළ සියලු වින්‍යාසයන් කළමනාකරණය කිරීම",
      title: "ආයුබෝවන්, {{firstName}}"
    },
    personalInfo: {
      subTitle: "Edit and export your personal profile and manage linked accounts",
      title: "පෞද්ගලික තොරතුරු"
    },
    privacy: {
      subTitle: "",
      title: "WSO2 හැඳුනුම් සේවාදායක රහස්‍යතා ප්‍රතිපත්තිය"
    },
    security: {
      subTitle: "සියලුම ආරක්ෂක සැකසුම් සහ නිර්දේශ සමඟ යාවත්කාලීනව සිටීමෙන් ඔබගේ ගිණුම සුරක්ෂිත කිරීම",
      title: "ආරක්ෂාව"
    }
  },
  placeholders: {
    404: {
      action: "නැවත ආරම්භයට",
      subtitles: {
        0: "We couldn't find the page you are looking for.",
        1: "Please check the URL or click on the button below to be redirected back to the home page."
      },
      title: "පිටුව හමු නොවීය"
    },
    emptySearchResult: {
      action: "සෙවුම් විමසුම හිස් කරන්න",
      subtitles: {
        0: "We couldn't find any results for \"{{query}}\"",
        1: "Please try a different search term."
      },
      title: "ප්‍රතිපලයක් හමු නොවීය"
    },
    genericError: {
      action: "පිටුව refresh කරන්න",
      subtitles: {
        0: "Something went wrong while displaying this page.",
        1: "See the browser console for technical details."
      },
      title: "යමක් වැරදී ඇත"
    },
    loginError: {
      action: "ලොග්අවුට් වෙන්න",
      subtitles: {
        0: "It seems like you don't have permission to use this portal.",
        1: "Please sign in with a different account."
      },
      title: "ඔබට අවසර නැත"
    }
  },
  sections: {
    accountRecovery: {
      description: "If you forget your password or username, recover your account " + "using email, SMS, or challenge questions",
      heading: "ගිණුම් ප්‍රතිසාධනය"
    },
    approvals: {
      description: "Approve or deny tasks related to workflow operations like adding users, " + "updating user claims, deleting user roles, etc.",
      heading: "අපේක්ෂිත අනුමත කිරීම්",
      placeholders: {
        emptyApprovalList: {
          heading: "ඔබට අපේක්ෂිත අනුමත කිරීම් නොමැත"
        }
      }
    },
    changePassword: {
      actionTitles: {
        change: "ඔබගේ මුරපදය වෙනස් කරන්න"
      },
      description: "Update your password regularly and make sure it's unique from other passwords you use.",
      heading: "මුරපදය වෙනස් කරන්න"
    },
    consentManagement: {
      actionTitles: {
        empty: "ඔබ කිසිදු යෙදුමක් අනුමත කර නැත"
      },
      description: "Revoke any consent given to an application or personal detail that you " + "have agreed to share",
      heading: "අනුමත යෙදුම්",
      placeholders: {
        emptyConsentList: {
          heading: "ඔබ කිසිදු යෙදුමක් අනුමත කර නැත"
        }
      }
    },
    federatedAssociations: {
      description: "මෙම ගිණුම හා සම්බන්ධ වෙනත් අනන්‍යතා සපයන්නන්ගෙන් ඔබගේ ගිණුම් බලන්න",
      heading: "බාහිර පිවිසුම්"
    },
    linkedAccounts: {
      actionTitles: {
        add: "ගිණුම එක් කරන්න"
      },
      description: "ඔබ සම්බන්ධිත ගිණුමකට පිවිසීමෙන් පසු ඔබගේ වෙනත් ගිණුම් එකතු කර ඒවා අතර මාරු වන්න",
      heading: "සම්බන්ධිත ගිණුම්"
    },
    mfa: {
      description: "Add an extra layer of protection to your account by configuring multiple " + "steps of authentication. You can choose from options like SMS or a security device",
      heading: "බහු සාධක සත්‍යාපනය"
    },
    profile: {
      description: "Manage and update your personal details like name, email, mobile number, organization, etc.",
      heading: "පැතිකඩ"
    },
    profileExport: {
      actionTitles: {
        export: "පැතිකඩ දත්ත අපනයනය කරන්න"
      },
      description: "පුද්ගලික දත්ත, ආරක්ෂක ප්‍රශ්න සහ කැමැත්ත ඇතුළුව ඔබගේ සියලුම පැතිකඩ දත්ත බාගත කිරීම",
      heading: "පැතිකඩ අපනයනය"
    },
    userSessions: {
      actionTitles: {
        empty: "සක්‍රීය IDP සැසි නොමැත",
        terminateAll: "සියලුම IDP සැසි අවසන් කරන්න"
      },
      description: "මෙය ඔබගේ ගිණුමේ සක්‍රියව IDP සැසි ලැයිස්තුවකි",
      heading: "සක්‍රීය IDP සැසි",
      placeholders: {
        emptySessionList: {
          heading: "සක්‍රීය IDP සැසි නොමැත"
        }
      }
    }
  }
};