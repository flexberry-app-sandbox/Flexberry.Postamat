﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Postamat
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Логистика.
    /// </summary>
    // *** Start programmer edit section *** (Логистика CustomAttributes)

    // *** End programmer edit section *** (Логистика CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ЛогистикаE", new string[] {
            "ID as \'ID\'",
            "Состояние as \'Состояние\'",
            "Информация as \'Информация\'"})]
    [View("ЛогистикаL", new string[] {
            "ID as \'ID\'",
            "Состояние as \'Состояние\'",
            "Информация as \'Информация\'"})]
    public class Логистика : ICSSoft.STORMNET.DataObject
    {
        
        private int fID;
        
        private IIS.Postamat.Состояние fСостояние;
        
        private string fИнформация;
        
        // *** Start programmer edit section *** (Логистика CustomMembers)

        // *** End programmer edit section *** (Логистика CustomMembers)

        
        /// <summary>
        /// ID.
        /// </summary>
        // *** Start programmer edit section *** (Логистика.ID CustomAttributes)

        // *** End programmer edit section *** (Логистика.ID CustomAttributes)
        public virtual int ID
        {
            get
            {
                // *** Start programmer edit section *** (Логистика.ID Get start)

                // *** End programmer edit section *** (Логистика.ID Get start)
                int result = this.fID;
                // *** Start programmer edit section *** (Логистика.ID Get end)

                // *** End programmer edit section *** (Логистика.ID Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Логистика.ID Set start)

                // *** End programmer edit section *** (Логистика.ID Set start)
                this.fID = value;
                // *** Start programmer edit section *** (Логистика.ID Set end)

                // *** End programmer edit section *** (Логистика.ID Set end)
            }
        }
        
        /// <summary>
        /// Информация.
        /// </summary>
        // *** Start programmer edit section *** (Логистика.Информация CustomAttributes)

        // *** End programmer edit section *** (Логистика.Информация CustomAttributes)
        [StrLen(255)]
        public virtual string Информация
        {
            get
            {
                // *** Start programmer edit section *** (Логистика.Информация Get start)

                // *** End programmer edit section *** (Логистика.Информация Get start)
                string result = this.fИнформация;
                // *** Start programmer edit section *** (Логистика.Информация Get end)

                // *** End programmer edit section *** (Логистика.Информация Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Логистика.Информация Set start)

                // *** End programmer edit section *** (Логистика.Информация Set start)
                this.fИнформация = value;
                // *** Start programmer edit section *** (Логистика.Информация Set end)

                // *** End programmer edit section *** (Логистика.Информация Set end)
            }
        }
        
        /// <summary>
        /// Состояние.
        /// </summary>
        // *** Start programmer edit section *** (Логистика.Состояние CustomAttributes)

        // *** End programmer edit section *** (Логистика.Состояние CustomAttributes)
        public virtual IIS.Postamat.Состояние Состояние
        {
            get
            {
                // *** Start programmer edit section *** (Логистика.Состояние Get start)

                // *** End programmer edit section *** (Логистика.Состояние Get start)
                IIS.Postamat.Состояние result = this.fСостояние;
                // *** Start programmer edit section *** (Логистика.Состояние Get end)

                // *** End programmer edit section *** (Логистика.Состояние Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Логистика.Состояние Set start)

                // *** End programmer edit section *** (Логистика.Состояние Set start)
                this.fСостояние = value;
                // *** Start programmer edit section *** (Логистика.Состояние Set end)

                // *** End programmer edit section *** (Логистика.Состояние Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ЛогистикаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЛогистикаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЛогистикаE", typeof(IIS.Postamat.Логистика));
                }
            }
            
            /// <summary>
            /// "ЛогистикаL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЛогистикаL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЛогистикаL", typeof(IIS.Postamat.Логистика));
                }
            }
        }
    }
}
